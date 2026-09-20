import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb8h1wbfm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb8h1wbfm"/>`,
		"fallback": "selfhst:pico-light",
	});
}

export default Component;
