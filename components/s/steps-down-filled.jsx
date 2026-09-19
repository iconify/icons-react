import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz70q30vs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz70q30vs"/>`,
		"fallback": "boxicons:steps-down-filled",
	});
}

export default Component;
