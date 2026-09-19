import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9vdr7-qh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9vdr7-qh"/>`,
		"fallback": "iconamoon:number-5-bold",
	});
}

export default Component;
