import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/arrvf-bwm.css';
import '../../css/s/stdn9rbca.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="arrvf-bwm"/><path class="stdn9rbca"/></g>`,
		"fallback": "cryptocurrency-color:mnz",
	});
}

export default Component;
