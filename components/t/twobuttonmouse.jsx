import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4c47gkwc.css';
import '../../css/r/rvgwmpbdo.css';
import '../../css/r/r7-o3sbun.css';
import '../../css/t/t6toq3b8x.css';
import '../../css/p/paa_rebkv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4c47gkwc"/><path class="rvgwmpbdo"/><path class="r7-o3sbun"/><path class="t6toq3b8x"/><path class="paa_rebkv"/>`,
		"fallback": "fxemoji:twobuttonmouse",
	});
}

export default Component;
