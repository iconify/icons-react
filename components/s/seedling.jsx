import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/et3i3ja-x.css';
import '../../css/d/dmxr1lg4z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="et3i3ja-x"/><path class="dmxr1lg4z"/></g>`,
		"fallback": "icon-park-solid:seedling",
	});
}

export default Component;
