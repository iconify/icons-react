import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_a8v-fgx.css';

const viewBox = {"width":352,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_a8v-fgx"/>`,
		"fallback": "zmdi:local-gas-station",
	});
}

export default Component;
