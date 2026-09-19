import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/yrr3k8brg.css';
import '../../css/g/g62i1pbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="yrr3k8brg"/><path class="g62i1pbna"/></g>`,
		"fallback": "bitcoin-icons:verify-outline",
	});
}

export default Component;
