import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8zj8i1eh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8zj8i1eh"/>`,
		"fallback": "selfhst:nodecast-tv-light",
	});
}

export default Component;
