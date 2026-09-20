import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w71k1pg1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w71k1pg1n"/>`,
		"fallback": "mdi:pickaxe",
	});
}

export default Component;
