import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_xfqt_8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_xfqt_8o"/>`,
		"fallback": "mdi:lan-pending",
	});
}

export default Component;
