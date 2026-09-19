import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvp_25qpx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvp_25qpx"/>`,
		"fallback": "dinkie-icons:location-pin-filled",
	});
}

export default Component;
