import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fqt00wfud.css';
import '../../css/z/zg5n0-bns.css';
import '../../css/p/pv42_gb1e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="fqt00wfud"/><path class="zg5n0-bns"/><path class="pv42_gb1e"/></g>`,
		"fallback": "icon-park-outline:toilet",
	});
}

export default Component;
