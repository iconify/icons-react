import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l74d4lbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l74d4lbfi"/>`,
		"fallback": "gg:menu-right-alt",
	});
}

export default Component;
