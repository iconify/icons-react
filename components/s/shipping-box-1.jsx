import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/u/ut78gleni.css';
import '../../css/w/wojputb6u.css';
import '../../css/z/ztg653twq.css';
import '../../css/w/w440_hb3p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ut78gleni"/><path class="wojputb6u"/><path class="ztg653twq"/><path class="w440_hb3p"/></g>`,
		"fallback": "streamline-plump-color:shipping-box-1",
	});
}

export default Component;
