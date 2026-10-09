import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxy2tubhz.css';
import '../../css/m/mw2e6bc0g.css';
import '../../css/r/rm1abvbtd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxy2tubhz"/><path class="mw2e6bc0g"/><path class="rm1abvbtd"/>`,
		"fallback": "energy-icons:thermometer-down-48-bold",
	});
}

export default Component;
