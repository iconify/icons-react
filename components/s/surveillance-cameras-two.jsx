import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rcj_7sg0m.css';
import '../../css/f/fmykh3lry.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="rcj_7sg0m"/><path class="fmykh3lry"/></g>`,
		"fallback": "icon-park-outline:surveillance-cameras-two",
	});
}

export default Component;
