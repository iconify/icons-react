import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xdqh4gbub.css';
import '../../css/l/ly55e3b8j.css';
import '../../css/g/g0km6z-da.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="xdqh4gbub"/><path class="ly55e3b8j"/><circle class="g0km6z-da"/></g>`,
		"fallback": "icon-park-solid:stereo-one",
	});
}

export default Component;
