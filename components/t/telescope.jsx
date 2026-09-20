import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l23hy8b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l23hy8b9v"/>`,
		"fallback": "mdi:telescope",
	});
}

export default Component;
