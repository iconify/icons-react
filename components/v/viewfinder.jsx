import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/br9dnzx7a.css';
import '../../css/n/nmmy-c08d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="br9dnzx7a"/><path class="nmmy-c08d"/></g>`,
		"fallback": "icon-park-outline:viewfinder",
	});
}

export default Component;
