import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-zwmjkxi.css';
import '../../css/w/w6h-t2a-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b f-zwmjkxi"/><path class="b w6h-t2a-r"/>`,
		"fallback": "bxl:web-components",
	});
}

export default Component;
