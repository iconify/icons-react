import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5r6idh3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5r6idh3x"/>`,
		"fallback": "ci:tablet",
	});
}

export default Component;
