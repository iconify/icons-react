import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/m/mr0kwnz3t.css';
import '../../css/u/uh4vgzqwo.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="mr0kwnz3t"/><path class="uh4vgzqwo"/></g>`,
		"fallback": "system-uicons:thumbs-down",
	});
}

export default Component;
