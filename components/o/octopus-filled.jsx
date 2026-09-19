import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umx1nx15r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umx1nx15r"/>`,
		"fallback": "boxicons:octopus-filled",
	});
}

export default Component;
