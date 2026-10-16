import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkmil7ekn.css';
import '../../css/o/olfq5v7hu.css';
import '../../css/w/wl8lujbqh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkmil7ekn"/><path class="olfq5v7hu"/><path class="wl8lujbqh"/>`,
		"fallback": "energy-icons:lawnmower-48",
	});
}

export default Component;
