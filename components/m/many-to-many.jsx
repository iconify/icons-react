import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rg_xgzhfl.css';
import '../../css/l/ll6bpkbte.css';
import '../../css/v/vmbylbb-t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="rg_xgzhfl"/><path class="ll6bpkbte"/><path class="vmbylbb-t"/></g>`,
		"fallback": "icon-park-outline:many-to-many",
	});
}

export default Component;
