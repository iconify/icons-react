import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4e6ys-el.css';
import '../../css/u/uprcssgre.css';
import '../../css/u/urmk4acde.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="t4e6ys-el"/><path clip-rule="evenodd" class="uprcssgre"/><path class="urmk4acde"/></g>`,
		"fallback": "thesvg-color:putio",
	});
}

export default Component;
