import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krh13ab-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krh13ab-l"/>`,
		"fallback": "mdi:timer-remove",
	});
}

export default Component;
