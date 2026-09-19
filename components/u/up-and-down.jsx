import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c30x9qo0x.css';
import '../../css/h/h-f1dmm4x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="c30x9qo0x"/><path class="h-f1dmm4x"/></g>`,
		"fallback": "icon-park-solid:up-and-down",
	});
}

export default Component;
