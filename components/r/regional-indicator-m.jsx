import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc85k4qnp.css';
import '../../css/b/bc5-xubfs.css';
import '../../css/s/sk_bn9biv.css';
import '../../css/j/j7ymy5bvl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="uc85k4qnp"/><g class="bc5-xubfs"><circle class="sk_bn9biv"/><path class="j7ymy5bvl"/></g>`,
		"fallback": "openmoji:regional-indicator-m",
	});
}

export default Component;
