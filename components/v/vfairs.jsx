import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_vn55bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_vn55bbk"/>`,
		"fallback": "simple-icons:vfairs",
	});
}

export default Component;
