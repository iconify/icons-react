import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obi7p7-mc.css';
import '../../css/u/u38_ebckg.css';
import '../../css/m/my31-mbvu.css';
import '../../css/a/a6-44yfbj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="obi7p7-mc"/><path class="u38_ebckg"/><path class="my31-mbvu"/><path class="a6-44yfbj"/>`,
		"fallback": "openmoji:japanese-passing-grade-button",
	});
}

export default Component;
