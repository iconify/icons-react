import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uqcoudqyh.css';
import '../../css/i/i5lvicvhn.css';
import '../../css/r/rj4248bgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uqcoudqyh"/><path class="i5lvicvhn"/><path class="rj4248bgl"/></g>`,
		"fallback": "keyline-icons:square-arrow-u-turn-left-two-tone",
	});
}

export default Component;
