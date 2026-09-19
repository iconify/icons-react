import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb1h9rbig.css';
import '../../css/d/dglb7bs3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb1h9rbig"/><path class="dglb7bs3o"/>`,
		"fallback": "bitcoin-icons:no-dollars-filled",
	});
}

export default Component;
