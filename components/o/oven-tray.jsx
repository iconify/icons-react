import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wzzwdrbyq.css';
import '../../css/o/o1zek4bzc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="wzzwdrbyq"/><path class="o1zek4bzc"/></g>`,
		"fallback": "icon-park-outline:oven-tray",
	});
}

export default Component;
