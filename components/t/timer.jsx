import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fhdut-j1i.css';
import '../../css/f/f80ucki7e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="fhdut-j1i"/><path class="f80ucki7e"/></g>`,
		"fallback": "icon-park-outline:timer",
	});
}

export default Component;
