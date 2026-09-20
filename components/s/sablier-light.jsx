import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrp8vu0zf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrp8vu0zf"/>`,
		"fallback": "selfhst:sablier-light",
	});
}

export default Component;
