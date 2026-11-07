import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt_ga9x1x.css';
import '../../css/k/k2crqybes.css';
import '../../css/l/lcil0k4ow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wt_ga9x1x"/><path class="k2crqybes"/><path class="lcil0k4ow"/>`,
		"fallback": "solar:ticket-sale-outline",
	});
}

export default Component;
