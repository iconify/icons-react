import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hm_3lb1ra.css';
import '../../css/n/n0amwwi7o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="hm_3lb1ra"/><path class="n0amwwi7o"/></g>`,
		"fallback": "streamline-plump-color:synchronize",
	});
}

export default Component;
