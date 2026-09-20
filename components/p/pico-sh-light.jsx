import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeb48f5_y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jeb48f5_y"/>`,
		"fallback": "selfhst:pico-sh-light",
	});
}

export default Component;
