import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/l2w541b5s.css';
import '../../css/n/ngen0gb1d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="l2w541b5s"/><path class="ngen0gb1d"/></g>`,
		"fallback": "icon-park-outline:right-expand",
	});
}

export default Component;
