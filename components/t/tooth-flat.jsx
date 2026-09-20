import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y58hkabsm.css';
import '../../css/k/kefn3bcur.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y58hkabsm"/><path class="kefn3bcur"/></g>`,
		"fallback": "streamline-color:tooth-flat",
	});
}

export default Component;
