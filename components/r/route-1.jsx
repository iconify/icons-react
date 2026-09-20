import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsy148som.css';
import '../../css/f/fg4g6tbff.css';
import '../../css/d/d7c0xbofg.css';
import '../../css/z/zjo456biz.css';
import '../../css/o/ou9-8bc_i.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsy148som"/><path clip-rule="evenodd" class="fg4g6tbff"/><path class="d7c0xbofg"/><path clip-rule="evenodd" class="zjo456biz"/><path class="ou9-8bc_i"/>`,
		"fallback": "lineicons:route-1",
	});
}

export default Component;
