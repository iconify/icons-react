import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv8i9sblk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv8i9sblk"/>`,
		"fallback": "selfhst:opentodo-light",
	});
}

export default Component;
