import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vopw6rdda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vopw6rdda"/>`,
		"fallback": "lets-icons:star",
	});
}

export default Component;
