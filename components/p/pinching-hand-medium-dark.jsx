import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/elemfac0z.css';
import '../../css/x/xwkybxi0x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="elemfac0z"/><path class="xwkybxi0x"/></g>`,
		"fallback": "fluent-emoji-flat:pinching-hand-medium-dark",
	});
}

export default Component;
