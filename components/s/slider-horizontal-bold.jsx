import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyhpkdsso.css';
import '../../css/x/xf-7ownph.css';
import '../../css/f/fhmm_kygi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyhpkdsso"/><path class="xf-7ownph"/><path class="fhmm_kygi"/>`,
		"fallback": "solar:slider-horizontal-bold",
	});
}

export default Component;
