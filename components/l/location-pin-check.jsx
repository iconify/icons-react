import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_hdj2l_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g_hdj2l_o"/>`,
		"fallback": "griddy-icons:location-pin-check",
	});
}

export default Component;
