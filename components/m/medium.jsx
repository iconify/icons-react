import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quqm-nbps.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quqm-nbps"/>`,
		"fallback": "fa-brands:medium",
	});
}

export default Component;
