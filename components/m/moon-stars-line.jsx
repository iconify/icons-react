import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itv2ip3np.css';
import '../../css/w/wio05-bap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itv2ip3np"/><path clip-rule="evenodd" class="wio05-bap"/>`,
		"fallback": "mingcute:moon-stars-line",
	});
}

export default Component;
