import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va6l_eb5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va6l_eb5d"/>`,
		"fallback": "mingcute:steam-line",
	});
}

export default Component;
