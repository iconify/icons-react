import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhxkqmbyb.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhxkqmbyb"/>`,
		"fallback": "fa7-brands:square-web-awesome",
	});
}

export default Component;
