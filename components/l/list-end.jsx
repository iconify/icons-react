import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l3apqsp1s.css';
import '../../css/d/djpoe8q0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l3apqsp1s"/><path class="djpoe8q0c"/></g>`,
		"fallback": "lucide:list-end",
	});
}

export default Component;
