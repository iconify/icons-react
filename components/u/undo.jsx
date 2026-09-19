import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/gs1ol1b1d.css';
import '../../css/h/h-3p8zbaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="gs1ol1b1d"/><path class="h-3p8zbaz"/></g>`,
		"fallback": "icon-park-outline:undo",
	});
}

export default Component;
