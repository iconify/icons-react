import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf715lbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf715lbfb"/>`,
		"fallback": "noviair-light:server-alert",
	});
}

export default Component;
