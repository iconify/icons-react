import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyyzexb_r.css';
import '../../css/t/tt8br1bqq.css';
import '../../css/d/dybrcqbqj.css';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGIZXTVzQH)" class="gyyzexb_r"/><defs><linearGradient id="SVGIZXTVzQH" x1="19.749" x2="6.326" y1="25.071" y2="4.173" gradientUnits="userSpaceOnUse"><stop class="tt8br1bqq"/><stop offset="1" class="dybrcqbqj"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:settings-28",
	});
}

export default Component;
