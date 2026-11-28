import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4i5kyb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4i5kyb1t"/>`,
		"fallback": "noviair-light:map-pins-plus",
	});
}

export default Component;
