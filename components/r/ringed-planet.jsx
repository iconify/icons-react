import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sk8b5jbko.css';
import '../../css/i/ir80l-8id.css';
import '../../css/t/t49aahmwu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sk8b5jbko"/><path class="ir80l-8id"/><path class="t49aahmwu"/></g>`,
		"fallback": "fluent-emoji-flat:ringed-planet",
	});
}

export default Component;
