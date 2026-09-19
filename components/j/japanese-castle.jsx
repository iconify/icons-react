import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnsnfobsp.css';
import '../../css/y/yib--qd7b.css';
import '../../css/z/z_qyy9b1d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jnsnfobsp"/><path class="yib--qd7b"/><path class="z_qyy9b1d"/></g>`,
		"fallback": "fluent-emoji-flat:japanese-castle",
	});
}

export default Component;
