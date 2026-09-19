import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jcog3sb1t.css';
import '../../css/q/qfx3b_qyy.css';
import '../../css/b/bdr13-bav.css';
import '../../css/h/hjrpc0b3y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jcog3sb1t"/><path class="qfx3b_qyy"/><path class="bdr13-bav"/><path class="hjrpc0b3y"/></g>`,
		"fallback": "glyphs:layer-front",
	});
}

export default Component;
