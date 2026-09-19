import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zndsmn-9e.css';
import '../../css/j/ji7mh1ftn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zndsmn-9e"/><path class="ji7mh1ftn"/></g>`,
		"fallback": "fluent-emoji-flat:megaphone",
	});
}

export default Component;
