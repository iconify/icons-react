import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mk2wddcfe.css';
import '../../css/p/p_4tjk9mu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mk2wddcfe"/><path class="p_4tjk9mu"/></g>`,
		"fallback": "fluent-emoji-flat:middle-finger-dark",
	});
}

export default Component;
