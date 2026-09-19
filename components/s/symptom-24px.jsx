import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dj5-0j2lr.css';
import '../../css/z/zawfv_b6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dj5-0j2lr"/><path clip-rule="evenodd" class="zawfv_b6z"/></g>`,
		"fallback": "healthicons:symptom-24px",
	});
}

export default Component;
