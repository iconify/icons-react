import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzb-k98lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzb-k98lc"/>`,
		"fallback": "mdi:led-off",
	});
}

export default Component;
