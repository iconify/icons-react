import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjz8ocn6u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjz8ocn6u"/>`,
		"fallback": "oui:token-histogram",
	});
}

export default Component;
