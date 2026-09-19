import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mk1u0xbci.css';
import '../../css/t/tlff4acvo.css';
import '../../css/h/h330vwkrl.css';
import '../../css/n/ns5-vub8r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mk1u0xbci"/><path class="tlff4acvo"/><path class="h330vwkrl"/><path class="ns5-vub8r"/></g>`,
		"fallback": "fluent-emoji-flat:tomato",
	});
}

export default Component;
