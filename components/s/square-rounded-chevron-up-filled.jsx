import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-j9djbto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-j9djbto"/>`,
		"fallback": "tabler:square-rounded-chevron-up-filled",
	});
}

export default Component;
