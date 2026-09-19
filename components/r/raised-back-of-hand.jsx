import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pae7qac7b.css';
import '../../css/w/wbbkf9btg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pae7qac7b"/><path class="wbbkf9btg"/></g>`,
		"fallback": "fluent-emoji-flat:raised-back-of-hand",
	});
}

export default Component;
