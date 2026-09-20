import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0k4jkb6m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x0k4jkb6m"/>`,
		"fallback": "streamline-plump:tiktok-logo-remix",
	});
}

export default Component;
