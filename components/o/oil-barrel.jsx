import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfy7r0byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfy7r0byb"/>`,
		"fallback": "mdi:oil-barrel",
	});
}

export default Component;
