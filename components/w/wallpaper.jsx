import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uf5r49box.css';
import '../../css/e/e2i1rhbxz.css';
import '../../css/d/dvzra1brn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uf5r49box"/><circle class="e2i1rhbxz"/><path class="dvzra1brn"/></g>`,
		"fallback": "hugeicons:wallpaper",
	});
}

export default Component;
