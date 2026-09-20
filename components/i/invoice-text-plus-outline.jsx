import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oko2r_blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oko2r_blc"/>`,
		"fallback": "mdi:invoice-text-plus-outline",
	});
}

export default Component;
