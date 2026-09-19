import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgi-m9epy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgi-m9epy"/>`,
		"fallback": "iconamoon:sorting-left-bold",
	});
}

export default Component;
