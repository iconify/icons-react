import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/t/tcetk8bds.css';
import '../../css/z/zp_ejprvc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="tcetk8bds"/><path class="zp_ejprvc"/></g>`,
		"fallback": "glyphs:sunrise",
	});
}

export default Component;
