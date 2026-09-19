import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6x_aab7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6x_aab7f"/>`,
		"fallback": "boxicons:link-break-filled",
	});
}

export default Component;
