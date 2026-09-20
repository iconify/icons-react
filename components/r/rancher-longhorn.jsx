import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjxa-7b6r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjxa-7b6r"/>`,
		"fallback": "selfhst:rancher-longhorn",
	});
}

export default Component;
