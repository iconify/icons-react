import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co28yzgia.css';
import '../../css/i/i0wzpzqff.css';
import '../../css/t/tifg0imgb.css';
import '../../css/v/v-3r9t8cb.css';
import '../../css/c/cal94qbrf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co28yzgia"/><path class="i0wzpzqff"/><path class="tifg0imgb"/><path class="v-3r9t8cb"/><path class="cal94qbrf"/>`,
		"fallback": "energy-icons:package-plus-48",
	});
}

export default Component;
