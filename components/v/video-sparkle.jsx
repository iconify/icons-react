import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/avmy5ib4j.css';
import '../../css/q/q2vmesbkz.css';
import '../../css/h/hsf-92beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="avmy5ib4j"/><rect class="q2vmesbkz"/><path class="hsf-92beb"/></g>`,
		"fallback": "andrsrxn:video-sparkle",
	});
}

export default Component;
