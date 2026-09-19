import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_cb4lblb.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_cb4lblb"/>`,
		"fallback": "fontisto:vuejs",
	});
}

export default Component;
