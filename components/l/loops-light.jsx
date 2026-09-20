import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv4xi2bec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv4xi2bec"/>`,
		"fallback": "selfhst:loops-light",
	});
}

export default Component;
