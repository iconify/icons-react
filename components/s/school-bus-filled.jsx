import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udwqky2ao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udwqky2ao"/>`,
		"fallback": "boxicons:school-bus-filled",
	});
}

export default Component;
