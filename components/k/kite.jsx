import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/o4f-kgq7r.css';
import '../../css/r/rcy39jrhg.css';
import '../../css/p/p4rg2bcss.css';
import '../../css/g/gg8-_obvh.css';
import '../../css/i/ile8n0t3i.css';
import '../../css/t/ts1laxbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="o4f-kgq7r wm-shadow"/><path class="rcy39jrhg"/><path class="p4rg2bcss"/><path class="gg8-_obvh wm-s"/><path class="ile8n0t3i wm-s"/><path class="ts1laxbud"/></g>`,
		"fallback": "withicons-retro:kite",
	});
}

export default Component;
