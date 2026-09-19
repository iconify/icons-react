import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tof-wkblf.css';
import '../../css/i/ipd93qbyx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tof-wkblf"/><path class="ipd93qbyx"/></g>`,
		"fallback": "fluent-emoji-flat:triangular-ruler",
	});
}

export default Component;
