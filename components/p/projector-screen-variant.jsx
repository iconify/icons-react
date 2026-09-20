import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef4973xtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef4973xtb"/>`,
		"fallback": "mdi:projector-screen-variant",
	});
}

export default Component;
