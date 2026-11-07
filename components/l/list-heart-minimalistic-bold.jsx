import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqtyd2syu.css';
import '../../css/t/tzom42bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bqtyd2syu"/><path class="tzom42bgp"/>`,
		"fallback": "solar:list-heart-minimalistic-bold",
	});
}

export default Component;
