import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/e6x_babbs.css';
import '../../css/w/w2-_16bmo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="e6x_babbs"/><path class="w2-_16bmo"/></g>`,
		"fallback": "icon-park-solid:magnet",
	});
}

export default Component;
