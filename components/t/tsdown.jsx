import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuf42lb8e.css';
import '../../css/a/ax_b47b8o.css';
import '../../css/x/xqr0jte3z.css';
import '../../css/e/e5hf_yb1h.css';
import '../../css/m/mq5se5_ek.css';
import '../../css/z/zb502zohi.css';
import '../../css/f/fmpa6hb8r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kuf42lb8e"><path class="ax_b47b8o"/><path class="xqr0jte3z"/><path class="e5hf_yb1h"/><path class="mq5se5_ek"/><path class="zb502zohi"/><path class="fmpa6hb8r"/></g>`,
		"fallback": "material-icon-theme:tsdown",
	});
}

export default Component;
