import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooh1spb_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooh1spb_e"/>`,
		"fallback": "mdi:numeric-9-circle-outline",
	});
}

export default Component;
