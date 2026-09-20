import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no7_fbapy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no7_fbapy"/>`,
		"fallback": "mdi:maxcdn",
	});
}

export default Component;
