import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q8e6hn3tj.css';
import '../../css/f/fleoa_b5k.css';
import '../../css/v/vsnvjbboc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q8e6hn3tj"/><path class="fleoa_b5k"/><path class="vsnvjbboc"/></g>`,
		"fallback": "fluent-emoji-flat:love-letter",
	});
}

export default Component;
