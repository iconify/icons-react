import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tgwhb0atj.css';
import '../../css/e/eedmhxbrq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tgwhb0atj"/><path clip-rule="evenodd" class="eedmhxbrq"/></g>`,
		"fallback": "healthicons:no2x-outline",
	});
}

export default Component;
