import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y25hqrbdu.css';
import '../../css/a/aj7rg5bjo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y25hqrbdu"/><path clip-rule="evenodd" class="aj7rg5bjo"/></g>`,
		"fallback": "fluent-emoji-flat:leftwards-hand-medium-light",
	});
}

export default Component;
