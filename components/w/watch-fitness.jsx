import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/i2qwksboe.css';
import '../../css/s/s5akslbsm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="i2qwksboe"/><path class="s5akslbsm"/></g>`,
		"fallback": "glyphs:watch-fitness",
	});
}

export default Component;
