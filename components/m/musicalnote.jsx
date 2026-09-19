import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9aflw9se.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9aflw9se"/>`,
		"fallback": "fxemoji:musicalnote",
	});
}

export default Component;
