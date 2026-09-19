import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwmy-8bsx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwmy-8bsx"/>`,
		"fallback": "fluent-emoji-high-contrast:light-bulb",
	});
}

export default Component;
