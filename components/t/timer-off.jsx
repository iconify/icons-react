import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-5gahbyk.css';
import '../../css/o/ollo1vbxs.css';
import '../../css/g/gzn0f_y-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="i-5gahbyk"/><circle class="ollo1vbxs"/><path class="gzn0f_y-a"/></g>`,
		"fallback": "andrsrxn:timer-off",
	});
}

export default Component;
