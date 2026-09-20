import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpnkqjn8e.css';
import '../../css/i/ifeyr2b5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpnkqjn8e"/><path class="ifeyr2b5m"/>`,
		"fallback": "octicon:server-24",
	});
}

export default Component;
