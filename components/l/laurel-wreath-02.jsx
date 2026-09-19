import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q0o_a6b2h.css';
import '../../css/q/q9ybrobvr.css';
import '../../css/k/kverakb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q0o_a6b2h"/><path class="q9ybrobvr"/><path class="kverakb5t"/></g>`,
		"fallback": "hugeicons:laurel-wreath-02",
	});
}

export default Component;
