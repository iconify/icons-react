import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgcrxl56t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lgcrxl56t"/>`,
		"fallback": "keyline-icons:square-arrow-u-turn-left-fill",
	});
}

export default Component;
