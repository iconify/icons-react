import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2utvwzsp.css';
import '../../css/v/vbqqarb_x.css';
import '../../css/y/y8cjvkbkr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f2utvwzsp"/><path clip-rule="evenodd" class="vbqqarb_x"/><path clip-rule="evenodd" class="y8cjvkbkr"/></g>`,
		"fallback": "streamline-plump-color:theater-mask-flat",
	});
}

export default Component;
