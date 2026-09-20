import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vcldahbqw.css';
import '../../css/m/mab2rwb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vcldahbqw"/><path class="mab2rwb6t"/></g>`,
		"fallback": "reicon:suspension-duotone",
	});
}

export default Component;
