import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xt_9002-u.css';
import '../../css/x/xr7p1abbe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xt_9002-u"/><path class="xr7p1abbe"/></g>`,
		"fallback": "streamline:round-cap",
	});
}

export default Component;
