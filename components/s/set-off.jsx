import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/tpmt_cc7r.css';
import '../../css/x/xgjnkbdze.css';
import '../../css/i/i-3wzrbog.css';
import '../../css/c/c2ha36_pi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="tpmt_cc7r"/><path class="xgjnkbdze"/><path class="i-3wzrbog"/><path class="c2ha36_pi"/></g>`,
		"fallback": "icon-park-solid:set-off",
	});
}

export default Component;
