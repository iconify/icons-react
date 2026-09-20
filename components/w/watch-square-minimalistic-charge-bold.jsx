import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mrzh6pb9d.css';
import '../../css/w/w77le6bwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mrzh6pb9d"/><path class="w77le6bwg"/></g>`,
		"fallback": "solar:watch-square-minimalistic-charge-bold",
	});
}

export default Component;
