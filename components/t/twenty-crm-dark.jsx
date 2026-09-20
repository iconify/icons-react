import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sof4l1tbh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sof4l1tbh"/>`,
		"fallback": "selfhst:twenty-crm-dark",
	});
}

export default Component;
