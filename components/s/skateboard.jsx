import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u1ns8nbeg.css';
import '../../css/t/t63j1rbwi.css';
import '../../css/i/ic1sxvw3g.css';
import '../../css/z/zlcqyybkr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u1ns8nbeg"/><path class="t63j1rbwi"/><path class="ic1sxvw3g"/><path clip-rule="evenodd" class="zlcqyybkr"/></g>`,
		"fallback": "fluent-emoji-flat:skateboard",
	});
}

export default Component;
