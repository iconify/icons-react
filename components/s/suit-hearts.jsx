import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfc8sf6fs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfc8sf6fs"/>`,
		"fallback": "mdi:suit-hearts",
	});
}

export default Component;
