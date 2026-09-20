import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzsff8i1n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzsff8i1n"/>`,
		"fallback": "selfhst:journiv-dark",
	});
}

export default Component;
