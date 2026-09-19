import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz_gw_b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hz_gw_b4d"/>`,
		"fallback": "akar-icons:light-bulb",
	});
}

export default Component;
