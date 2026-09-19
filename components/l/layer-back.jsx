import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/m42m0__vv.css';
import '../../css/g/g-1p4cckv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="m42m0__vv"/><path class="g-1p4cckv"/></g>`,
		"fallback": "glyphs:layer-back",
	});
}

export default Component;
