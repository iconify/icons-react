import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkf05g6mg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkf05g6mg"/>`,
		"fallback": "ri:user-community-fill",
	});
}

export default Component;
