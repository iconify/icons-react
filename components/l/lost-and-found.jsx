import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z4-uwkb9v.css';
import '../../css/c/coa9_4bzy.css';
import '../../css/s/s831j315p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z4-uwkb9v"/><path class="coa9_4bzy"/><path class="s831j315p"/></g>`,
		"fallback": "streamline-color:lost-and-found",
	});
}

export default Component;
