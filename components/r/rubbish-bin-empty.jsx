import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-lyb0boe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-lyb0boe"/>`,
		"fallback": "mdi:rubbish-bin-empty",
	});
}

export default Component;
