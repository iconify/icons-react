import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hi1z_x5rh.css';
import '../../css/m/mwxtuxbnw.css';
import '../../css/f/f-y26nqzk.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hi1z_x5rh"/><path class="mwxtuxbnw"/><path class="f-y26nqzk"/></g>`,
		"fallback": "cif:nr",
	});
}

export default Component;
