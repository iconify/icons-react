import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tz7fd6bhm.css';
import '../../css/i/iv7-lixhj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="tz7fd6bhm"/><path class="iv7-lixhj"/></g>`,
		"fallback": "cryptocurrency-color:pax",
	});
}

export default Component;
