import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0phu2bbs.css';
import '../../css/s/sb6pk9_pi.css';
import '../../css/i/ipe253n2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s0phu2bbs"><rect class="sb6pk9_pi"/><path class="ipe253n2r"/></g>`,
		"fallback": "iconamoon:microphone-bold",
	});
}

export default Component;
