import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn8u5lb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn8u5lb_a"/>`,
		"fallback": "ci:minus",
	});
}

export default Component;
