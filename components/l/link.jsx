import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdkb1-t-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdkb1-t-r"/>`,
		"fallback": "lets-icons:link",
	});
}

export default Component;
