import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8ka7wbct.css';
import '../../css/r/rwx1unbvv.css';
import '../../css/t/tl7fndb1e.css';
import '../../css/q/qv-rl58jq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8ka7wbct"/><path class="rwx1unbvv"/><path class="tl7fndb1e"/><path class="qv-rl58jq"/>`,
		"fallback": "fxemoji:lowerleftpaintbrush",
	});
}

export default Component;
