import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sqqgvebkn.css';
import '../../css/v/v1fp2tbrr.css';
import '../../css/f/fck4l8bgi.css';
import '../../css/e/exee4vbtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sqqgvebkn"/><path class="v1fp2tbrr"/><path class="fck4l8bgi"/><path class="exee4vbtz"/></g>`,
		"fallback": "hugeicons:sandwich",
	});
}

export default Component;
