import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3q92ubcr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3q92ubcr"/>`,
		"fallback": "oui:star-empty",
	});
}

export default Component;
