import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aotto27tk.css';
import '../../css/t/tvcamkifj.css';
import '../../css/z/zow8-3akm.css';
import '../../css/t/td83dsdhd.css';
import '../../css/j/j41dk0btx.css';
import '../../css/t/t4_qjqbsk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aotto27tk"/><path class="tvcamkifj"/><path clip-rule="evenodd" class="zow8-3akm"/><path class="td83dsdhd"/><path class="j41dk0btx"/><path clip-rule="evenodd" class="t4_qjqbsk"/></g>`,
		"fallback": "glyphs:signal-tower-outline",
	});
}

export default Component;
