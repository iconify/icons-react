import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmna2kb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmna2kb_g"/>`,
		"fallback": "solar:videocamera-bold",
	});
}

export default Component;
