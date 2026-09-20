import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p3l0n1bpn.css';
import '../../css/v/vcdulzb_o.css';
import '../../css/y/yncnvab-y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p3l0n1bpn"/><path class="vcdulzb_o"/><path clip-rule="evenodd" class="yncnvab-y"/></g>`,
		"fallback": "streamline-plump-color:justice-scale-2-flat",
	});
}

export default Component;
