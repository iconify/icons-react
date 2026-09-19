import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/uhzhoz_lg.css';
import '../../css/t/t1l8wac3t.css';
import '../../css/i/iucmbeysh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="uhzhoz_lg"/><path class="t1l8wac3t"/><path class="iucmbeysh"/></g>`,
		"fallback": "icon-park-solid:outgoing",
	});
}

export default Component;
