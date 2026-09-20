import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm7nzo8xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm7nzo8xf"/>`,
		"fallback": "si:swap-horiz-duotone",
	});
}

export default Component;
