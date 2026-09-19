import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awxwfdbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awxwfdbzb"/>`,
		"fallback": "ci:magnifying-glass-plus",
	});
}

export default Component;
