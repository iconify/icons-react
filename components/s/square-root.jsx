import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vg2fodxqp.css';
import '../../css/j/jbe255wwi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vg2fodxqp"/><path class="jbe255wwi"/></g>`,
		"fallback": "at-icons:square-root",
	});
}

export default Component;
