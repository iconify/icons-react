import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/ibywwyb0e.css';
import '../../css/n/ngen0gb1d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="ibywwyb0e"/><path class="ngen0gb1d"/></g>`,
		"fallback": "icon-park-solid:right-expand",
	});
}

export default Component;
