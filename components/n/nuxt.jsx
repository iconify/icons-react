import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpgjb18la.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpgjb18la"/>`,
		"fallback": "mdi:nuxt",
	});
}

export default Component;
