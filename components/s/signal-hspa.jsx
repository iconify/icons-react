import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vmn2taboa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vmn2taboa"/>`,
		"fallback": "mdi:signal-hspa",
	});
}

export default Component;
