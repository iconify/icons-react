import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dtv04jbdb.css';
import '../../css/q/qrn48nibf.css';
import '../../css/v/vhiwtnr1h.css';
import '../../css/z/zw4zflb5j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dtv04jbdb"/><path class="qrn48nibf"/><path class="vhiwtnr1h"/><path class="zw4zflb5j"/></g>`,
		"fallback": "fluent-emoji-flat:shopping-bags",
	});
}

export default Component;
