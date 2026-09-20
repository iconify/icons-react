import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qcdvqs90r.css';
import '../../css/s/sk3b6qm0n.css';
import '../../css/p/pw8f5c0fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qcdvqs90r"/><path class="sk3b6qm0n"/><path class="pw8f5c0fp"/></g>`,
		"fallback": "solar:send-square-linear",
	});
}

export default Component;
