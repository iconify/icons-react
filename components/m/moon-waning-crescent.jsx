import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5dt5ybzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5dt5ybzh"/>`,
		"fallback": "mdi:moon-waning-crescent",
	});
}

export default Component;
