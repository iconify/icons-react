import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn3g4qbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn3g4qbds"/>`,
		"fallback": "boxicons:pacifism",
	});
}

export default Component;
