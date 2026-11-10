import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hg7-85tex.css';
import '../../css/z/za14v-nns.css';
import '../../css/e/ec5k3i96l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hg7-85tex"/><path class="za14v-nns"/><path class="ec5k3i96l"/></g>`,
		"fallback": "andrsrxn:panel-left-open",
	});
}

export default Component;
