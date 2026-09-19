import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3dpzbtra.css';
import '../../css/c/cf7ta6bqc.css';
import '../../css/p/pbc9w196e.css';
import '../../css/h/hs1eo5b-l.css';
import '../../css/b/bqv7lzboi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y3dpzbtra"><path class="cf7ta6bqc"/><path class="pbc9w196e"/><path class="hs1eo5b-l"/><path class="bqv7lzboi"/></g>`,
		"fallback": "icon-park-solid:rings",
	});
}

export default Component;
