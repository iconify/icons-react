import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtrk6zyad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtrk6zyad"/>`,
		"fallback": "fxemoji:regionalindicatorg",
	});
}

export default Component;
