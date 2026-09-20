import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc1a-qb_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc1a-qb_s"/>`,
		"fallback": "thesvg:nexon",
	});
}

export default Component;
