import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj9gbswqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj9gbswqe"/>`,
		"fallback": "typcn:sort-numerically",
	});
}

export default Component;
