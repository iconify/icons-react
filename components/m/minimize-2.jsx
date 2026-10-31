import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/aq0_wmv-j.css';
import '../../css/e/epyea88en.css';
import '../../css/p/p5bavvb-d.css';
import '../../css/k/k4o9pvb7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="aq0_wmv-j wm-shadow"/><path class="epyea88en wm-shadow"/><path class="p5bavvb-d"/><path class="k4o9pvb7c"/></g>`,
		"fallback": "withicons-brutal:minimize-2",
	});
}

export default Component;
