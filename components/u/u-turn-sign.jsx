import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gzha3o9cv.css';
import '../../css/a/anocjeqrh.css';
import '../../css/m/mewrxib2n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gzha3o9cv"/><path class="anocjeqrh"/><path class="mewrxib2n"/></g>`,
		"fallback": "glyphs:u-turn-sign",
	});
}

export default Component;
