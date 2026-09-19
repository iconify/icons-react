import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/bezyd7b3w.css';
import '../../css/y/y1_alg6mo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="bezyd7b3w"/><path class="y1_alg6mo"/></g>`,
		"fallback": "icon-park-outline:trunk",
	});
}

export default Component;
