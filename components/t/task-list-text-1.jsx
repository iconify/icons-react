import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rd02rgc7x.css';
import '../../css/h/h_prov27d.css';
import '../../css/f/fvdo13-2z.css';
import '../../css/d/d9138qwpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rd02rgc7x"/><path class="h_prov27d"/><path class="fvdo13-2z"/><path class="d9138qwpd"/></g>`,
		"fallback": "streamline-ultimate-color:task-list-text-1",
	});
}

export default Component;
