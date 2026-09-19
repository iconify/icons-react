import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7fdm4bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7fdm4bed"/>`,
		"fallback": "boxicons:light-bulb-on-filled",
	});
}

export default Component;
