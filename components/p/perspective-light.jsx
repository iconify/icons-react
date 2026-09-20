import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0orljh9w.css';
import '../../css/v/v5_kwmb_i.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f0orljh9w"/><path clip-rule="evenodd" class="v5_kwmb_i"/></g>`,
		"fallback": "thesvg-color:perspective-light",
	});
}

export default Component;
