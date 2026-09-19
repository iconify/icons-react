import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/x/xedfj89fl.css';
import '../../css/p/p7l2a-b7e.css';
import '../../css/m/mdc3ss7xx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="vkcj4bcdm"/><path class="xedfj89fl"/><path class="p7l2a-b7e"/><path class="mdc3ss7xx"/></g>`,
		"fallback": "icon-park-outline:music-cd",
	});
}

export default Component;
