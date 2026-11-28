import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naq_9b0-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naq_9b0-d"/>`,
		"fallback": "noviair:paw-plus",
	});
}

export default Component;
