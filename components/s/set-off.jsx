import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/shidfnbcb.css';
import '../../css/x/xgjnkbdze.css';
import '../../css/i/i-3wzrbog.css';
import '../../css/l/l1lz8dbkq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="shidfnbcb"/><path class="xgjnkbdze"/><path class="i-3wzrbog"/><path class="l1lz8dbkq"/></g>`,
		"fallback": "icon-park-outline:set-off",
	});
}

export default Component;
