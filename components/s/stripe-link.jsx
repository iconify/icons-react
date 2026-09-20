import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rj5k10lic.css';
import '../../css/v/v6586zbsh.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="rj5k10lic"/><path class="v6586zbsh"/></g>`,
		"fallback": "thesvg-color:stripe-link",
	});
}

export default Component;
