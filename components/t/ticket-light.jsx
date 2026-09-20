import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/mlefrrb0e.css';
import '../../css/z/zmo_spbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="mlefrrb0e"/><path class="zmo_spbgo"/></g>`,
		"fallback": "lets-icons:ticket-light",
	});
}

export default Component;
