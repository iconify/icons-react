import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myf161b0e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myf161b0e"/>`,
		"fallback": "selfhst:papra-dark",
	});
}

export default Component;
