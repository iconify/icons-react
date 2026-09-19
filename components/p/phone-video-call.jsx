import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn55ge7zx.css';
import '../../css/b/bqhz5iotd.css';
import '../../css/o/otqgkxb6x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tn55ge7zx"><path class="bqhz5iotd"/><path class="otqgkxb6x"/></g>`,
		"fallback": "icon-park-solid:phone-video-call",
	});
}

export default Component;
