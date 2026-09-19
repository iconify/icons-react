import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s4m2sp3ml.css';
import '../../css/h/hypk8gbio.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s4m2sp3ml"/><path class="hypk8gbio"/></g>`,
		"fallback": "at-icons:stop-sign",
	});
}

export default Component;
