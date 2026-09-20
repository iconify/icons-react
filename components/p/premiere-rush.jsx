import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gz3hd0b2e.css';
import '../../css/y/yxo-isb7k.css';
import '../../css/w/wycjhibbk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGkRCCwb7V)"><path class="gz3hd0b2e"/><path class="yxo-isb7k"/></g><defs><clipPath id="SVGkRCCwb7V"><path class="wycjhibbk"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:premiere-rush",
	});
}

export default Component;
