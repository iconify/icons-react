import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oam1m3jkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oam1m3jkt"/>`,
		"fallback": "mdi:shul-outline",
	});
}

export default Component;
