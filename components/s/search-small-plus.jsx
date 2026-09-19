import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itdv8l7hu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itdv8l7hu"/>`,
		"fallback": "ci:search-small-plus",
	});
}

export default Component;
