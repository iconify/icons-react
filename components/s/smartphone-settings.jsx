import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg5l5wb2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg5l5wb2n"/>`,
		"fallback": "mdi:smartphone-settings",
	});
}

export default Component;
