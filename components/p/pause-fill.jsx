import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnq05bk4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnq05bk4s"/>`,
		"fallback": "grommet-icons:pause-fill",
	});
}

export default Component;
