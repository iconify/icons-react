import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/knd-anbdw.css';
import '../../css/d/dv6uu4bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="knd-anbdw"/><path class="dv6uu4bar"/></g>`,
		"fallback": "hugeicons:radar-01",
	});
}

export default Component;
