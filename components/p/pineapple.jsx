import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/g8ciazbyu.css';
import '../../css/d/dmtq6nxpb.css';
import '../../css/u/u7cx-4fdn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="g8ciazbyu"/><path class="dmtq6nxpb"/><path class="u7cx-4fdn"/></g>`,
		"fallback": "icon-park-outline:pineapple",
	});
}

export default Component;
