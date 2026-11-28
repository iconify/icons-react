import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e1913d5an.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e1913d5an"/>`,
		"fallback": "noviair-light:piggy-bank",
	});
}

export default Component;
