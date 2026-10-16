import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu9cx5bea.css';
import '../../css/c/cnom9xbgm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu9cx5bea"/><path class="cnom9xbgm"/>`,
		"fallback": "energy-icons:sparkline-48",
	});
}

export default Component;
