import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jxz04mbly.css';
import '../../css/m/m_rt4_bcb.css';
import '../../css/v/vuso242af.css';
import '../../css/q/qxsgg6psh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jxz04mbly"/><path class="m_rt4_bcb"/><path class="vuso242af"/><path class="qxsgg6psh"/></g>`,
		"fallback": "glyphs:van-bold",
	});
}

export default Component;
