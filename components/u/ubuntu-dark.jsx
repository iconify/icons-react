import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m929mabtb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m929mabtb"/>`,
		"fallback": "selfhst:ubuntu-dark",
	});
}

export default Component;
