import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd5gw_41x.css';
import '../../css/z/zr8xy7d1h.css';
import '../../css/i/ihmii9b0s.css';
import '../../css/j/j4h28gm6a.css';
import '../../css/t/ts4yc_bpq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd5gw_41x"/><path class="zr8xy7d1h"/><path class="ihmii9b0s"/><path class="j4h28gm6a"/><path class="ts4yc_bpq"/>`,
		"fallback": "energy-icons:rewilding-48-bold",
	});
}

export default Component;
