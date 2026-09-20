import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwks1ib6k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwks1ib6k"/>`,
		"fallback": "streamline-pixel:logo-linkedin",
	});
}

export default Component;
