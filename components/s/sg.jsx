import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4e_yzgqd.css';
import '../../css/f/fbu3f96ig.css';
import '../../css/k/k9x6zhdhd.css';
import '../../css/p/p9-mz9bbv.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t4e_yzgqd"/><path class="fbu3f96ig"/><path class="k9x6zhdhd"/><path class="p9-mz9bbv"/></g>`,
		"fallback": "cif:sg",
	});
}

export default Component;
