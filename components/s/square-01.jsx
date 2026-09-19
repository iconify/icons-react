import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/beqnu5b5d.css';
import '../../css/t/td2l0lh5v.css';
import '../../css/x/x036cgb2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="beqnu5b5d"/><path class="td2l0lh5v"/><path class="x036cgb2m"/></g>`,
		"fallback": "hugeicons:square-01",
	});
}

export default Component;
