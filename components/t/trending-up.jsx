import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xconl5blq.css';
import '../../css/n/nrfl8bb0b.css';
import '../../css/b/by5uv5obj.css';
import '../../css/y/ydldn8bjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xconl5blq"/><path class="nrfl8bb0b wm-shadow"/><path class="by5uv5obj"/><path class="ydldn8bjc"/></g>`,
		"fallback": "withicons-brutal:trending-up",
	});
}

export default Component;
