import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hf38sfcoo.css';
import '../../css/v/vxy8sab_q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hf38sfcoo"/><path class="vxy8sab_q"/></g>`,
		"fallback": "glyphs:rain-1",
	});
}

export default Component;
