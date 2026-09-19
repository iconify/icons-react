import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cclx4gbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cclx4gbbh"/>`,
		"fallback": "boxicons:thermometer-filled",
	});
}

export default Component;
