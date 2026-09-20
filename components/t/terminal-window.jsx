import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jn-eps-an.css';
import '../../css/o/op0x_vb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jn-eps-an"/><path class="op0x_vb5a"/></g>`,
		"fallback": "tdesign:terminal-window",
	});
}

export default Component;
