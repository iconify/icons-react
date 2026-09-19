import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/qyszsvcyl.css';
import '../../css/y/yrbyiib0t.css';
import '../../css/i/iass40n0e.css';
import '../../css/j/jz89wkdin.css';
import '../../css/w/ww5-o3blo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="qyszsvcyl"/><circle class="yrbyiib0t"/><circle class="iass40n0e"/><circle class="jz89wkdin"/><path class="ww5-o3blo"/></g>`,
		"fallback": "icon-park-solid:tree-diagram",
	});
}

export default Component;
