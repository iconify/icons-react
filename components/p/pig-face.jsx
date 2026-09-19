import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h6n2s7btu.css';
import '../../css/y/y0ima4i8y.css';
import '../../css/y/yi_45ddob.css';
import '../../css/a/asi2twp_g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h6n2s7btu"/><path class="y0ima4i8y"/><path class="yi_45ddob"/><path class="asi2twp_g"/></g>`,
		"fallback": "fluent-emoji-flat:pig-face",
	});
}

export default Component;
