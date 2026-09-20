import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-5puw7gl.css';
import '../../css/t/ti8-n-1dp.css';
import '../../css/n/n0pmiueld.css';
import '../../css/k/k2g6ovbkx.css';
import '../../css/h/h-qw15bzh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v-5puw7gl"/><path clip-rule="evenodd" class="ti8-n-1dp"/><path class="n0pmiueld"/><path class="k2g6ovbkx"/><path class="h-qw15bzh"/></g>`,
		"fallback": "streamline-flex-color:visual-blind-1",
	});
}

export default Component;
