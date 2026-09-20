import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x24czp0_z.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/t/th2d8e65k.css';
import '../../css/k/km8ej6bsu.css';
import '../../css/a/ap1vpl62u.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x24czp0_z"/><g class="brzn_0bpr"><path class="th2d8e65k"/><path class="km8ej6bsu"/><path class="ap1vpl62u"/></g>`,
		"fallback": "openmoji:thumbs-down",
	});
}

export default Component;
