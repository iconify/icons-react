import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfow1tlzk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfow1tlzk"/>`,
		"fallback": "selfhst:tvheadend-light",
	});
}

export default Component;
