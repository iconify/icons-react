import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/r5_m18j1a.css';
import '../../css/k/kz6k1fb0q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="r5_m18j1a"/><path class="kz6k1fb0q"/></g>`,
		"fallback": "icon-park-solid:one-third-rotation",
	});
}

export default Component;
