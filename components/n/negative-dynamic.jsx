import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj66k2bbx.css';
import '../../css/w/wtfmx7b3v.css';
import '../../css/y/y7n_q-bpf.css';
import '../../css/f/f3bu0o9cg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj66k2bbx"/><g class="wtfmx7b3v"><path class="y7n_q-bpf"/><path class="f3bu0o9cg"/></g>`,
		"fallback": "flat-color-icons:negative-dynamic",
	});
}

export default Component;
