import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/amnjqoxee.css';
import '../../css/f/fi-43sb1e.css';
import '../../css/y/ya1qmvbwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="amnjqoxee"/><path class="fi-43sb1e"/><path class="ya1qmvbwo"/></g>`,
		"fallback": "andrsrxn:video-off",
	});
}

export default Component;
