import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy3_51b9s.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy3_51b9s"/>`,
		"fallback": "jam:volume-down-circle",
	});
}

export default Component;
