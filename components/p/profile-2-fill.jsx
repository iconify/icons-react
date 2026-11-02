import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa1gi8eew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aa1gi8eew"/>`,
		"fallback": "mingcute:profile-2-fill",
	});
}

export default Component;
