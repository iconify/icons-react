import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_ah50reo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_ah50reo"/>`,
		"fallback": "catppuccin:prisma",
	});
}

export default Component;
