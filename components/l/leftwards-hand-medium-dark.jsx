import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pfwfvy3ob.css';
import '../../css/x/x0p25ybrm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pfwfvy3ob"/><path clip-rule="evenodd" class="x0p25ybrm"/></g>`,
		"fallback": "fluent-emoji-flat:leftwards-hand-medium-dark",
	});
}

export default Component;
