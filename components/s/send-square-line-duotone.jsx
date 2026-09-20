import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qcdvqs90r.css';
import '../../css/p/prc8-7ugw.css';
import '../../css/w/wf89k6buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qcdvqs90r"/><path class="prc8-7ugw"/><path class="wf89k6buf"/></g>`,
		"fallback": "solar:send-square-line-duotone",
	});
}

export default Component;
