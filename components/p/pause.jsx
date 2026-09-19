import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzkfv2_pz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzkfv2_pz"/>`,
		"fallback": "mono-icons:pause",
	});
}

export default Component;
