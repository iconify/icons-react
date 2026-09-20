import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fmg5-rbfu.css';
import '../../css/v/vgynvrhex.css';
import '../../css/g/g_eh3ebdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fmg5-rbfu"/><path class="vgynvrhex"/><path class="g_eh3ebdg"/></g>`,
		"fallback": "solar:logout-3-linear",
	});
}

export default Component;
