import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzs7albyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzs7albyz"/>`,
		"fallback": "akar-icons:reduce",
	});
}

export default Component;
