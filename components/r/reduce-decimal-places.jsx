import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mpaozksdi.css';
import '../../css/w/wdiqrzjxb.css';
import '../../css/e/erq7bzoxe.css';
import '../../css/k/k-w74vgau.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="mpaozksdi"/><path class="wdiqrzjxb"/><path class="erq7bzoxe"/><path class="k-w74vgau"/></g>`,
		"fallback": "icon-park-outline:reduce-decimal-places",
	});
}

export default Component;
