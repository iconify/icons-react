import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/tmngr6b0v.css';
import '../../css/o/o6f548blr.css';
import '../../css/m/mmo-88bcm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="tmngr6b0v"/><path class="o6f548blr"/><circle class="mmo-88bcm"/></g>`,
		"fallback": "icon-park-outline:no-shooting",
	});
}

export default Component;
