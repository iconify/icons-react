import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wx9v51bcs.css';
import '../../css/w/wl1foccuz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wx9v51bcs"/><path clip-rule="evenodd" class="wl1foccuz"/></g>`,
		"fallback": "fluent-emoji-flat:leftwards-hand-dark",
	});
}

export default Component;
