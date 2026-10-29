import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/d4vy9ccks.css';
import '../../css/m/mijyx3brl.css';
import '../../css/n/nbiavb01t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="d4vy9ccks"/><path class="mijyx3brl wm-shadow"/><path class="nbiavb01t"/></g>`,
		"fallback": "withicons:quote-engrave",
	});
}

export default Component;
