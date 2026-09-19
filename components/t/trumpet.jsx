import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l8xk6kbgp.css';
import '../../css/b/bd13yxb1u.css';
import '../../css/e/eyowyccos.css';
import '../../css/n/n74rnsbwl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="l8xk6kbgp"/><path class="bd13yxb1u"/><path class="eyowyccos"/><path class="n74rnsbwl"/></g>`,
		"fallback": "icon-park-outline:trumpet",
	});
}

export default Component;
