import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/qt79kinow.css';
import '../../css/d/db-vkwbdy.css';
import '../../css/c/c9-talbxy.css';
import '../../css/a/a9i3e_buh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="qt79kinow"/><path class="db-vkwbdy"/><circle class="c9-talbxy"/><path class="a9i3e_buh"/></g>`,
		"fallback": "icon-park-outline:vacuum-cleaner",
	});
}

export default Component;
