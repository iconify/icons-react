import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/j/jrhkmqbue.css';
import '../../css/i/ie_r_ccsv.css';
import '../../css/o/om98qib7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="jrhkmqbue"/><path class="ie_r_ccsv"/><path class="om98qib7x"/></g>`,
		"fallback": "solar:send-twice-square-bold-duotone",
	});
}

export default Component;
