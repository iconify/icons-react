import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mznliyb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mznliyb_b"/>`,
		"fallback": "solar:oven-mitts-outline",
	});
}

export default Component;
