import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7pkxcccs.css';
import '../../css/k/k4rjlac_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7pkxcccs"/><path class="k4rjlac_n"/>`,
		"fallback": "lets-icons:sign-out-squre-duotone-line",
	});
}

export default Component;
