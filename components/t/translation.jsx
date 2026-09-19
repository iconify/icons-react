import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/wi6bj6b3d.css';
import '../../css/z/zbulgnbcg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="wi6bj6b3d"/><path class="zbulgnbcg"/></g>`,
		"fallback": "icon-park-outline:translation",
	});
}

export default Component;
