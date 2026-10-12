import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ebbapmbde.css';
import '../../css/t/tfv7onber.css';
import '../../css/n/n-3ls8adj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ebbapmbde"/><rect transform="rotate(90 21.42 9.09)" class="tfv7onber"/><rect transform="rotate(90 21.42 9.09)" class="n-3ls8adj"/></g>`,
		"fallback": "andrsrxn:text-insert-image-center",
	});
}

export default Component;
