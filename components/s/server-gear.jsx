import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmwb7_bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmwb7_bwc"/>`,
		"fallback": "noviair-light:server-gear",
	});
}

export default Component;
