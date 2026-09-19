import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fxn3b2laz.css';
import '../../css/k/k71chflfg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fxn3b2laz"/><path class="k71chflfg"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-in-suit-levitating",
	});
}

export default Component;
