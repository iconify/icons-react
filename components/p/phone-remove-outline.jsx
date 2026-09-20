import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrg1k343p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrg1k343p"/>`,
		"fallback": "mdi:phone-remove-outline",
	});
}

export default Component;
