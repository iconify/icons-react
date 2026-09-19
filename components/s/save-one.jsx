import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jh2j5sozv.css';
import '../../css/k/k38s6xbay.css';
import '../../css/u/uxt7hetvo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="jh2j5sozv"/><path class="k38s6xbay"/><path class="uxt7hetvo"/></g>`,
		"fallback": "icon-park-outline:save-one",
	});
}

export default Component;
