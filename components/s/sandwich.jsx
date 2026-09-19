import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca34txrqs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca34txrqs"/>`,
		"fallback": "icon-park-outline:sandwich",
	});
}

export default Component;
