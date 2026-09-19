import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h06k64bje.css';
import '../../css/g/gdem_rh5e.css';
import '../../css/w/w487obc3p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="h06k64bje"/><path class="gdem_rh5e"/><path class="w487obc3p"/></g>`,
		"fallback": "glyphs:kiss-wink-heart",
	});
}

export default Component;
