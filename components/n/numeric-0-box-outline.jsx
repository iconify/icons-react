import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwn8_7bmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwn8_7bmv"/>`,
		"fallback": "mdi:numeric-0-box-outline",
	});
}

export default Component;
