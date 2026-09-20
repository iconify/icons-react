import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_xxphbqx.css';
import '../../css/r/r0tjoehii.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="y_xxphbqx"/><rect class="ouiSwatchInput__stroke r0tjoehii"/>`,
		"fallback": "oui:swatch-input",
	});
}

export default Component;
