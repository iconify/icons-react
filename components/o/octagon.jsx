import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe5r8nmyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe5r8nmyg"/>`,
		"fallback": "proicons:octagon",
	});
}

export default Component;
