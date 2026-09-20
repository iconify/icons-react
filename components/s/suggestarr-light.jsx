import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-3_x9pzb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-3_x9pzb"/>`,
		"fallback": "selfhst:suggestarr-light",
	});
}

export default Component;
