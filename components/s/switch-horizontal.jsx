import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w22h_obxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w22h_obxc"/>`,
		"fallback": "heroicons-outline:switch-horizontal",
	});
}

export default Component;
