import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wset72fas.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wset72fas"/>`,
		"fallback": "selfhst:synapse",
	});
}

export default Component;
