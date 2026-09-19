import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l_b2deb8g.css';
import '../../css/z/zzmu7n0ik.css';
import '../../css/h/hpkemxbxl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="l_b2deb8g"/><path class="zzmu7n0ik"/><path class="hpkemxbxl"/></g>`,
		"fallback": "icon-park-outline:level-nine-title",
	});
}

export default Component;
