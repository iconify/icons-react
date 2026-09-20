import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwh1grb1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwh1grb1c"/>`,
		"fallback": "mdi:slate-open-play-outline",
	});
}

export default Component;
