import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u3awk2cum.css';
import '../../css/c/ctaf6od0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u3awk2cum"/><path class="ctaf6od0q"/></g>`,
		"fallback": "solar:reply-line-duotone",
	});
}

export default Component;
