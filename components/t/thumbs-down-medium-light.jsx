import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3hiceqoh.css';
import '../../css/s/snjr1nbqn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c3hiceqoh"/><path class="snjr1nbqn"/></g>`,
		"fallback": "fluent-emoji-flat:thumbs-down-medium-light",
	});
}

export default Component;
