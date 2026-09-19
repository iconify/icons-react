import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c543isbeu.css';
import '../../css/h/hkuwvwbvi.css';
import '../../css/y/ysq3he5vq.css';
import '../../css/s/sj6rcj4hn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="c543isbeu"/><path class="hkuwvwbvi"/><path class="ysq3he5vq"/><path class="sj6rcj4hn"/></g>`,
		"fallback": "icon-park-solid:peoples",
	});
}

export default Component;
