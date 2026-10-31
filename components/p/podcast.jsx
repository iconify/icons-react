import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/q/qnrbdrvpd.css';
import '../../css/o/o9x0zt3az.css';
import '../../css/m/me84ynbpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="qnrbdrvpd"/><path class="o9x0zt3az wm-k"/><path class="me84ynbpn wm-a"/></g>`,
		"fallback": "withicons-kawaii:podcast",
	});
}

export default Component;
