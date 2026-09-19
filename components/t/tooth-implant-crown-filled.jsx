import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ri88sebtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ri88sebtx"/>`,
		"fallback": "griddy-icons:tooth-implant-crown-filled",
	});
}

export default Component;
