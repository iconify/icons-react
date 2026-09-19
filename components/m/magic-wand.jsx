import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/duj3z92ei.css';
import '../../css/x/xlde7_boa.css';
import '../../css/y/y5qodxd4s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="duj3z92ei"/><path class="xlde7_boa"/><path class="y5qodxd4s"/></g>`,
		"fallback": "fluent-emoji-flat:magic-wand",
	});
}

export default Component;
