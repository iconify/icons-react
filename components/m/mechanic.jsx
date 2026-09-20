import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx_p-mb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx_p-mb5e"/>`,
		"fallback": "mdi:mechanic",
	});
}

export default Component;
