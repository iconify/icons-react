import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yupvxm31u.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yupvxm31u"/>`,
		"fallback": "zmdi:keyboard-hide",
	});
}

export default Component;
