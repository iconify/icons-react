import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_zwxbbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_zwxbbwn"/>`,
		"fallback": "cbi:solar-battery-10",
	});
}

export default Component;
