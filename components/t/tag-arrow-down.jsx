import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdjkhz09g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdjkhz09g"/>`,
		"fallback": "mdi:tag-arrow-down",
	});
}

export default Component;
