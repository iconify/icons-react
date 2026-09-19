import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cd9r3qbvi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cd9r3qbvi"/>`,
		"fallback": "cryptocurrency:repv2",
	});
}

export default Component;
