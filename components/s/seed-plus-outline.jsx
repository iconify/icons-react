import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiezucc0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiezucc0a"/>`,
		"fallback": "mdi:seed-plus-outline",
	});
}

export default Component;
