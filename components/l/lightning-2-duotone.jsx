import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fzo2-bbzg.css';
import '../../css/r/r74yafbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fzo2-bbzg"/><path class="r74yafbbl"/></g>`,
		"fallback": "iconamoon:lightning-2-duotone",
	});
}

export default Component;
