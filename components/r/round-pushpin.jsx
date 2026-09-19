import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z8q8fj40b.css';
import '../../css/q/q99ox19wx.css';
import '../../css/u/uo7fxkwnr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z8q8fj40b"/><path class="q99ox19wx"/><path class="uo7fxkwnr"/></g>`,
		"fallback": "fluent-emoji-flat:round-pushpin",
	});
}

export default Component;
