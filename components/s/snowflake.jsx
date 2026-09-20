import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mabhupbvr.css';
import '../../css/r/r6k3nwbni.css';
import '../../css/b/bun9k0irb.css';
import '../../css/n/n3sg7hylo.css';
import '../../css/i/ihebp_r-q.css';
import '../../css/i/i-j6hjxsv.css';
import '../../css/l/lxwvyvbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mabhupbvr"/><path class="r6k3nwbni"/><path class="bun9k0irb"/><path class="n3sg7hylo"/><path class="ihebp_r-q"/><path class="i-j6hjxsv"/><path class="lxwvyvbwc"/></g>`,
		"fallback": "tabler:snowflake",
	});
}

export default Component;
