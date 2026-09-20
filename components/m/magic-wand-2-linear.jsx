import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zeeawlb9o.css';
import '../../css/r/rimuh7bpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zeeawlb9o"/><path class="rimuh7bpm"/></g>`,
		"fallback": "solar:magic-wand-2-linear",
	});
}

export default Component;
