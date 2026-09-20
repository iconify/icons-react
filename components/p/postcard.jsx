import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/m/mmre0ys1c.css';
import '../../css/a/abqrpeh9e.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="mmre0ys1c"/><path class="abqrpeh9e"/></g>`,
		"fallback": "system-uicons:postcard",
	});
}

export default Component;
