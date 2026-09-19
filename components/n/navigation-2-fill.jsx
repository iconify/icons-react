import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fidnqcqve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fidnqcqve"/>`,
		"fallback": "eva:navigation-2-fill",
	});
}

export default Component;
