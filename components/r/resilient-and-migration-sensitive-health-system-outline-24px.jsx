import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ymkzamb3e.css';
import '../../css/t/tgb1nyyui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ymkzamb3e"/><path class="tgb1nyyui"/></g>`,
		"fallback": "healthicons:resilient-and-migration-sensitive-health-system-outline-24px",
	});
}

export default Component;
