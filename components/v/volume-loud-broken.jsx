import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jjrwwmc0f.css';
import '../../css/e/ezz2lob8j.css';
import '../../css/e/ekpuqr98k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jjrwwmc0f"/><path class="ezz2lob8j"/><path class="ekpuqr98k"/></g>`,
		"fallback": "solar:volume-loud-broken",
	});
}

export default Component;
