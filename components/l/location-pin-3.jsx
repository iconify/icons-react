import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/la-3nhbeb.css';
import '../../css/w/w8axghvbk.css';
import '../../css/r/r3aof507d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="la-3nhbeb"/><path class="w8axghvbk"/><path class="r3aof507d"/></g>`,
		"fallback": "streamline-flex:location-pin-3",
	});
}

export default Component;
