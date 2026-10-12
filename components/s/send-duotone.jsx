import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3s5wzb5x.css';
import '../../css/o/o9eo1e7xa.css';
import '../../css/v/v-0f67bvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e3s5wzb5x"/><path class="o9eo1e7xa"/><path class="v-0f67bvu"/></g>`,
		"fallback": "lucide-extended:send-duotone",
	});
}

export default Component;
