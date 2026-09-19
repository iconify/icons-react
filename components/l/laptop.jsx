import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l8mnc6v9f.css';
import '../../css/f/f435wzpfw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l8mnc6v9f"/><path class="f435wzpfw"/></g>`,
		"fallback": "at-icons:laptop",
	});
}

export default Component;
