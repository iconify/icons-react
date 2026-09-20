import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv_2wekjr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv_2wekjr"/>`,
		"fallback": "selfhst:sportarr-light",
	});
}

export default Component;
