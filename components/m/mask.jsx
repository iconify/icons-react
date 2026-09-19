import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/z01qkqb2l.css';
import '../../css/q/q37jtebrq.css';
import '../../css/n/n92m255cp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="z01qkqb2l"/><path class="q37jtebrq"/><path class="n92m255cp"/></g>`,
		"fallback": "icon-park-outline:mask",
	});
}

export default Component;
