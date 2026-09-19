import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol_w2hbhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ol_w2hbhz"/>`,
		"fallback": "healthicons:male-24px",
	});
}

export default Component;
