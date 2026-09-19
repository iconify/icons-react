import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/t/tzt0_bt_l.css';
import '../../css/k/kls3_nbwn.css';
import '../../css/d/d-l22-bpi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="tzt0_bt_l"/><path class="kls3_nbwn"/><path class="d-l22-bpi"/></g>`,
		"fallback": "icon-park-solid:tent-banner",
	});
}

export default Component;
