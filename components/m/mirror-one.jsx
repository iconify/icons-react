import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/fdqd_x6ux.css';
import '../../css/a/a10evxbfq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="fdqd_x6ux"/><path class="a10evxbfq"/></g>`,
		"fallback": "icon-park-solid:mirror-one",
	});
}

export default Component;
