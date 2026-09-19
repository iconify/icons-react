import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sjxna7b-r.css';
import '../../css/i/ix3duqbuu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="sjxna7b-r"/><path class="ix3duqbuu"/></g>`,
		"fallback": "glyphs:sleet",
	});
}

export default Component;
