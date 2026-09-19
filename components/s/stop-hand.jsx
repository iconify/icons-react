import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x70hj8-4s.css';
import '../../css/k/kxghb_b9a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x70hj8-4s"/><path class="kxghb_b9a"/></g>`,
		"fallback": "glyphs:stop-hand",
	});
}

export default Component;
