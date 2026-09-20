import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc_22wbuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc_22wbuz"/>`,
		"fallback": "ri:map-pin-3-line",
	});
}

export default Component;
