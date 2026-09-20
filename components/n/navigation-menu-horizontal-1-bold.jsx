import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv9ayeb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv9ayeb4c"/>`,
		"fallback": "streamline-ultimate:navigation-menu-horizontal-1-bold",
	});
}

export default Component;
