import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbon-80vn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbon-80vn"/>`,
		"fallback": "mdi:signature-text",
	});
}

export default Component;
