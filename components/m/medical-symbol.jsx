import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uxvs1lbwz.css';
import '../../css/a/ajp7y2bno.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uxvs1lbwz"/><path class="ajp7y2bno"/></g>`,
		"fallback": "fluent-emoji-flat:medical-symbol",
	});
}

export default Component;
