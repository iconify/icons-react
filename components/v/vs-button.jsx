import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ibv6145te.css';
import '../../css/k/kupud1c9n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ibv6145te"/><path class="kupud1c9n"/></g>`,
		"fallback": "fluent-emoji-flat:vs-button",
	});
}

export default Component;
