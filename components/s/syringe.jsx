import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd8ib77jg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd8ib77jg"/>`,
		"fallback": "noviair-light:syringe",
	});
}

export default Component;
