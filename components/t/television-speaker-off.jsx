import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wy3fbubvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wy3fbubvy"/>`,
		"fallback": "mdi:television-speaker-off",
	});
}

export default Component;
