import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4k4dsb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4k4dsb2x"/>`,
		"fallback": "mdi:percent",
	});
}

export default Component;
