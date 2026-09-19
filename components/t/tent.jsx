import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/voxy1aceb.css';
import '../../css/n/nbvwk4b2s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="voxy1aceb"/><path class="nbvwk4b2s"/></g>`,
		"fallback": "icon-park-outline:tent",
	});
}

export default Component;
