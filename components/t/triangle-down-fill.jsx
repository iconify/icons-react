import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4h25zd1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4h25zd1z"/>`,
		"fallback": "akar-icons:triangle-down-fill",
	});
}

export default Component;
