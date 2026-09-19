import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd_e_9btw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd_e_9btw"/>`,
		"fallback": "boxicons:skip-previous-circle-filled",
	});
}

export default Component;
