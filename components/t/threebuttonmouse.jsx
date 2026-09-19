import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4c47gkwc.css';
import '../../css/r/rvgwmpbdo.css';
import '../../css/h/h-k86boip.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4c47gkwc"/><path class="rvgwmpbdo"/><path class="h-k86boip"/>`,
		"fallback": "fxemoji:threebuttonmouse",
	});
}

export default Component;
