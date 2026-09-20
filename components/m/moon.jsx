import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nms3h9f_z.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nms3h9f_z"/>`,
		"fallback": "jam:moon",
	});
}

export default Component;
