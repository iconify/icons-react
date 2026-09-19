import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/i/ixbkhldpp.css';
import '../../css/l/lchlphbxu.css';
import '../../css/p/pv42_gb1e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ixbkhldpp"/><path class="lchlphbxu"/><path class="pv42_gb1e"/></g>`,
		"fallback": "icon-park-solid:toilet",
	});
}

export default Component;
