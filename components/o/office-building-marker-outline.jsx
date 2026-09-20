import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nq5t6u07g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nq5t6u07g"/>`,
		"fallback": "mdi:office-building-marker-outline",
	});
}

export default Component;
