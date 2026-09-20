import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifu-l4bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifu-l4bdw"/>`,
		"fallback": "mdi:roller-skate-off",
	});
}

export default Component;
