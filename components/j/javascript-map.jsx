import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aed_zrbyo.css';
import '../../css/k/krcq_5bxx.css';
import '../../css/a/axxv9v49k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="aed_zrbyo"><path class="krcq_5bxx"/><path class="axxv9v49k"/></g>`,
		"fallback": "material-icon-theme:javascript-map",
	});
}

export default Component;
