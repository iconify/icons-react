import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbu0j497j.css';
import '../../css/q/qd7txsbcd.css';
import '../../css/g/g7s0w3a6m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qbu0j497j"/><path class="qd7txsbcd"/><path class="g7s0w3a6m"/></g>`,
		"fallback": "fluent-emoji-flat:microbe",
	});
}

export default Component;
