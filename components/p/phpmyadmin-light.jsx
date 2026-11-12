import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwl8mey3g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwl8mey3g"/>`,
		"fallback": "selfhst:phpmyadmin-light",
	});
}

export default Component;
