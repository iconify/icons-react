import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftd6m5bxf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftd6m5bxf"/>`,
		"fallback": "selfhst:philips-hue-dark",
	});
}

export default Component;
