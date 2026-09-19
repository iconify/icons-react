import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/ta6zu2fhi.css';
import '../../css/s/sj392dbgb.css';
import '../../css/w/wlt8dprqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ta6zu2fhi"/><path class="sj392dbgb"/><path class="wlt8dprqx"/></g>`,
		"fallback": "hugeicons:niqab",
	});
}

export default Component;
