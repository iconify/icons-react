import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvdp7_lgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvdp7_lgp"/>`,
		"fallback": "mdi:power-plug-off",
	});
}

export default Component;
