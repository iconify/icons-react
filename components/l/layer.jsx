import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6j_ppv8x.css';
import '../../css/h/h0ktb0wiz.css';
import '../../css/h/hj6ofxbho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6j_ppv8x"/><path class="h0ktb0wiz"/><path class="hj6ofxbho"/>`,
		"fallback": "bxs:layer",
	});
}

export default Component;
