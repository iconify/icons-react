import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2ko3vzuf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2ko3vzuf"/>`,
		"fallback": "selfhst:philips-hue-light",
	});
}

export default Component;
