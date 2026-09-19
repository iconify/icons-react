import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iivu8_blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iivu8_blj"/>`,
		"fallback": "boxicons:popsicle-filled",
	});
}

export default Component;
