import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6k18be4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6k18be4o"/>`,
		"fallback": "streamline-ultimate:stairs-descend",
	});
}

export default Component;
