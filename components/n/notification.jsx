import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmf-0pbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmf-0pbcs"/>`,
		"fallback": "mono-icons:notification",
	});
}

export default Component;
