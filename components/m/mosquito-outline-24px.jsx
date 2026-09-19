import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ivnahgb1w.css';
import '../../css/b/bykycrbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ivnahgb1w"/><path clip-rule="evenodd" class="bykycrbqs"/></g>`,
		"fallback": "healthicons:mosquito-outline-24px",
	});
}

export default Component;
