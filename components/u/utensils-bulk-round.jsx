import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sju-1u1tt.css';
import '../../css/w/wmauh9vjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sju-1u1tt"/><path class="wmauh9vjx"/></g>`,
		"fallback": "coolicons:utensils-bulk-round",
	});
}

export default Component;
