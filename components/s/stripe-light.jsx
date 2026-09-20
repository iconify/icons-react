import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1tjpti_r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1tjpti_r"/>`,
		"fallback": "selfhst:stripe-light",
	});
}

export default Component;
