import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/z/zay1jacum.css';
import '../../css/i/ih879mn4c.css';
import '../../css/e/e7egbhwiy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="zay1jacum"/><path class="ih879mn4c"/><path class="e7egbhwiy"/></g>`,
		"fallback": "icon-park-solid:picture",
	});
}

export default Component;
