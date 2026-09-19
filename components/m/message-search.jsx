import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/to4dkwksy.css';
import '../../css/m/mhovb8b_p.css';
import '../../css/p/pic7lxbxy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="to4dkwksy"/><circle class="mhovb8b_p"/><path class="pic7lxbxy"/></g>`,
		"fallback": "icon-park-outline:message-search",
	});
}

export default Component;
