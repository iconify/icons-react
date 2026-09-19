import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/duicamb2h.css';
import '../../css/k/k0fxfk0bb.css';
import '../../css/r/rmwopmwjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="duicamb2h"/><path class="k0fxfk0bb"/><path class="rmwopmwjr"/></g>`,
		"fallback": "hugeicons:soil-moisture-global",
	});
}

export default Component;
