import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/so8xpnbnk.css';
import '../../css/m/mivvaqbue.css';
import '../../css/i/ig3df1b8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="so8xpnbnk"/><path class="mivvaqbue"/><circle class="ig3df1b8n"/></g>`,
		"fallback": "hugeicons:mymind",
	});
}

export default Component;
