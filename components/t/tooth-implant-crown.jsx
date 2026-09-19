import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8_3ddcmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z8_3ddcmp"/>`,
		"fallback": "griddy-icons:tooth-implant-crown",
	});
}

export default Component;
