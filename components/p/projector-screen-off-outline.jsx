import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fws7slz-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fws7slz-c"/>`,
		"fallback": "mdi:projector-screen-off-outline",
	});
}

export default Component;
