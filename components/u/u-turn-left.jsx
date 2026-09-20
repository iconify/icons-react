import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olsel1bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olsel1bem"/>`,
		"fallback": "mdi:u-turn-left",
	});
}

export default Component;
