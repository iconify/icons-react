import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmfqkyb1d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmfqkyb1d"/>`,
		"fallback": "selfhst:papra",
	});
}

export default Component;
