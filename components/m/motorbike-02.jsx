import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i0wtp628f.css';
import '../../css/q/q7zvs2b6v.css';
import '../../css/d/d3tu5-t0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="i0wtp628f"/><circle class="q7zvs2b6v"/><path class="d3tu5-t0b"/></g>`,
		"fallback": "hugeicons:motorbike-02",
	});
}

export default Component;
