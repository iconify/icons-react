import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/x/xedfj89fl.css';
import '../../css/c/cfsfyeb-n.css';
import '../../css/m/mdc3ss7xx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="vkcj4bcdm"/><path class="xedfj89fl"/><path class="cfsfyeb-n"/><path class="mdc3ss7xx"/></g>`,
		"fallback": "icon-park-solid:music-cd",
	});
}

export default Component;
