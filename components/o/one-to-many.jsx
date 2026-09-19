import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rg_xgzhfl.css';
import '../../css/l/l5tcc9b-l.css';
import '../../css/y/ya-s0pbbq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="rg_xgzhfl"/><path class="l5tcc9b-l"/><path class="ya-s0pbbq"/></g>`,
		"fallback": "icon-park-outline:one-to-many",
	});
}

export default Component;
