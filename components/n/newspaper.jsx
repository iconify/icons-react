import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/w/whd865izb.css';
import '../../css/n/nj6gqjb-d.css';
import '../../css/h/h-wpcv3yo.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="whd865izb"/><path class="nj6gqjb-d"/><path class="h-wpcv3yo"/></g>`,
		"fallback": "system-uicons:newspaper",
	});
}

export default Component;
