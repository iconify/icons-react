import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vqi7hhbac.css';
import '../../css/q/qi3_pf8jr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="vqi7hhbac"/><path class="qi3_pf8jr"/></g>`,
		"fallback": "icon-park-outline:solar-energy",
	});
}

export default Component;
