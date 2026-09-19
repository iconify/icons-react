import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7vjo-dfp.css';
import '../../css/p/pb1v7pbfq.css';
import '../../css/m/moke7fbpn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7vjo-dfp"/><path class="pb1v7pbfq"/><path class="moke7fbpn"/>`,
		"fallback": "cil:loop-1",
	});
}

export default Component;
