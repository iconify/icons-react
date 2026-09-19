import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxp6wwb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxp6wwb7l"/>`,
		"fallback": "bxs:mouse-alt",
	});
}

export default Component;
