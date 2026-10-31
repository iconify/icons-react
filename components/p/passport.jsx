import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/j9ab-lb9c.css';
import '../../css/v/vkqvckkjf.css';
import '../../css/t/t9ojhbb3c.css';
import '../../css/v/v7_xde7np.css';
import '../../css/o/o1sikoqan.css';
import '../../css/e/e2avbabjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="j9ab-lb9c wm-shadow"/><path class="vkqvckkjf"/><path class="t9ojhbb3c"/><path class="v7_xde7np"/><path class="o1sikoqan"/><path class="e2avbabjy"/></g>`,
		"fallback": "withicons-retro:passport",
	});
}

export default Component;
