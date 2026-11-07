import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jaq7rv7ys.css';
import '../../css/n/nf_b67v_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jaq7rv7ys"/><path class="nf_b67v_j"/></g>`,
		"fallback": "solar:t-shirt-line-duotone",
	});
}

export default Component;
