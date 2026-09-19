import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe6w1b_gw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe6w1b_gw"/>`,
		"fallback": "cbi:small-fan",
	});
}

export default Component;
