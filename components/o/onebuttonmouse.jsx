import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4c47gkwc.css';
import '../../css/r/rvgwmpbdo.css';
import '../../css/x/xp27v-b4z.css';
import '../../css/r/r7-o3sbun.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4c47gkwc"/><path class="rvgwmpbdo"/><path class="xp27v-b4z"/><path class="r7-o3sbun"/>`,
		"fallback": "fxemoji:onebuttonmouse",
	});
}

export default Component;
