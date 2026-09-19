import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg4qjdbjr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg4qjdbjr"/>`,
		"fallback": "ion:ios-minus",
	});
}

export default Component;
