import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uger821xi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uger821xi"/>`,
		"fallback": "streamline-plump:ipad-tablet-screen",
	});
}

export default Component;
