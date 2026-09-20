import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq1_b0oru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq1_b0oru"/>`,
		"fallback": "mdi:sausage",
	});
}

export default Component;
