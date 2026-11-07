import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ychitgsnk.css';
import '../../css/l/l3o4rbo3n.css';
import '../../css/l/lennyzbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ychitgsnk"/><path class="l3o4rbo3n"/><path class="lennyzbya"/></g>`,
		"fallback": "solar:videocamera-record-line-duotone",
	});
}

export default Component;
