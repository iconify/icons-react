import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tcetk8bds.css';
import '../../css/x/xgfekbcmz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tcetk8bds"/><path class="xgfekbcmz"/></g>`,
		"fallback": "glyphs:sunset",
	});
}

export default Component;
