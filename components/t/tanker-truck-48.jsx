import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m35bxhbui.css';
import '../../css/q/q0uyhzb7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m35bxhbui"/><path class="q0uyhzb7z"/>`,
		"fallback": "energy-icons:tanker-truck-48",
	});
}

export default Component;
