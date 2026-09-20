import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/n/nrq690bwu.css';
import '../../css/j/jqrlyv50h.css';
import '../../css/i/i9xc1pbuc.css';
import '../../css/x/x--nit3bm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="nrq690bwu"/><path class="jqrlyv50h"/><path class="i9xc1pbuc"/><path class="x--nit3bm"/></g>`,
		"fallback": "streamline-plump-color:usb-port",
	});
}

export default Component;
