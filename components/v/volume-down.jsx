import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gpqcxdbjh.css';
import '../../css/x/x34qaszya.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gpqcxdbjh"/><path class="x34qaszya"/></g>`,
		"fallback": "streamline-color:volume-down",
	});
}

export default Component;
