import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxa5l4b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wxa5l4b8u"/>`,
		"fallback": "healthicons:pneumonia-24px",
	});
}

export default Component;
