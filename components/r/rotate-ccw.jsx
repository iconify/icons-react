import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uqwm_-q0t.css';
import '../../css/s/seipdv7-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uqwm_-q0t"/><path class="seipdv7-u"/></g>`,
		"fallback": "feather:rotate-ccw",
	});
}

export default Component;
