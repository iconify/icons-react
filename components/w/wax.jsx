import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p305i0r_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p305i0r_r"/>`,
		"fallback": "token:wax",
	});
}

export default Component;
