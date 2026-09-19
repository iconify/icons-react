import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/eldoky0en.css';
import '../../css/a/ajxep-bpy.css';
import '../../css/n/nxcjdzsby.css';
import '../../css/o/oa0qdzgod.css';
import '../../css/j/jyjk2cs2r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="eldoky0en"/><path class="ajxep-bpy"/><circle class="nxcjdzsby"/><circle class="oa0qdzgod"/><path class="jyjk2cs2r"/></g>`,
		"fallback": "icon-park-solid:videocamera-one",
	});
}

export default Component;
