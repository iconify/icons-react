import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fclsd1b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fclsd1b_h"/>`,
		"fallback": "mdi:radio-button-indeterminate",
	});
}

export default Component;
