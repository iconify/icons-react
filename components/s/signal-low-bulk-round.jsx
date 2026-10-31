import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xlinu8bdl.css';
import '../../css/k/kgy_edcgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xlinu8bdl"/><path class="kgy_edcgj"/></g>`,
		"fallback": "coolicons:signal-low-bulk-round",
	});
}

export default Component;
