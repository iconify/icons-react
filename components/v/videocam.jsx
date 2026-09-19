import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vxl1ejw5c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vxl1ejw5c"/>`,
		"fallback": "famicons:videocam",
	});
}

export default Component;
