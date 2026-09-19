import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rehko012o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rehko012o"/>`,
		"fallback": "griddy-icons:piggy-bank-filled",
	});
}

export default Component;
