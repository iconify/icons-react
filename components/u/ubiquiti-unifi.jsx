import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxfq3wdcc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxfq3wdcc"/>`,
		"fallback": "selfhst:ubiquiti-unifi",
	});
}

export default Component;
