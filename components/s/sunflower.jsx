import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v1a4a86lw.css';
import '../../css/w/ws4eaebxn.css';
import '../../css/r/rne_7o1uu.css';
import '../../css/i/i7ns3xxod.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v1a4a86lw"/><path class="ws4eaebxn"/><path class="rne_7o1uu"/><path class="i7ns3xxod"/></g>`,
		"fallback": "fluent-emoji-flat:sunflower",
	});
}

export default Component;
