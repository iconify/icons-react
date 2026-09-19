import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eprtld1js.css';
import '../../css/c/c9vcf-1ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eprtld1js"/><path class="c9vcf-1ls"/></g>`,
		"fallback": "hugeicons:move-diagonal",
	});
}

export default Component;
