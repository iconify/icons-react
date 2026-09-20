import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds0s6f9to.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds0s6f9to"/>`,
		"fallback": "selfhst:mediamtx-light",
	});
}

export default Component;
