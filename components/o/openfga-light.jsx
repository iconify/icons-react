import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmmzbdc6k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmmzbdc6k"/>`,
		"fallback": "selfhst:openfga-light",
	});
}

export default Component;
