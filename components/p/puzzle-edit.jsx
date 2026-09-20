import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnotr46_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnotr46_u"/>`,
		"fallback": "mdi:puzzle-edit",
	});
}

export default Component;
