import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piom46bco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piom46bco"/>`,
		"fallback": "boxicons:layers-plus-alt",
	});
}

export default Component;
