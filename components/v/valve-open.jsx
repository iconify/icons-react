import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnwn6gu-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnwn6gu-r"/>`,
		"fallback": "mdi:valve-open",
	});
}

export default Component;
