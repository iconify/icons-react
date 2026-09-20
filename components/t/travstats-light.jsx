import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c24on08cr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c24on08cr"/>`,
		"fallback": "selfhst:travstats-light",
	});
}

export default Component;
