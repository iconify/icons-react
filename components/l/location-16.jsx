import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dig0yubbs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dig0yubbs"/>`,
		"fallback": "octicon:location-16",
	});
}

export default Component;
