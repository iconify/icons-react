import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzn1pt78g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzn1pt78g"/>`,
		"fallback": "typcn:th-large-outline",
	});
}

export default Component;
