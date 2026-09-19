import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/uw89-tbxn.css';
import '../../css/a/a_r8tk11v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="uw89-tbxn"/><path class="a_r8tk11v"/></g>`,
		"fallback": "icon-park-outline:taurus",
	});
}

export default Component;
