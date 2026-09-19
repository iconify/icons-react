import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k0w5wetfq.css';
import '../../css/s/sdi5r08mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="k0w5wetfq"/><path class="sdi5r08mg"/></g>`,
		"fallback": "hugeicons:keyframe-bottom",
	});
}

export default Component;
