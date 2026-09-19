import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb_q_ubbt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb_q_ubbt"/>`,
		"fallback": "dinkie-icons:love",
	});
}

export default Component;
