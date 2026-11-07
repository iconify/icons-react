import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-s5hqb3c.css';
import '../../css/b/bis1pebdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b-s5hqb3c"/><path class="bis1pebdp"/>`,
		"fallback": "solar:shop-minimalistic-outline",
	});
}

export default Component;
