import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vjtxb2bkn.css';
import '../../css/y/y77s6pbru.css';
import '../../css/y/yu4jrjx8c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vjtxb2bkn"/><path class="y77s6pbru"/><path class="yu4jrjx8c"/></g>`,
		"fallback": "fluent-emoji-flat:palms-up-together-medium-dark",
	});
}

export default Component;
