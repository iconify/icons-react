import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/b/bi-0wkbso.css';
import '../../css/c/cyxc_lbvc.css';
import '../../css/i/ixr36dbus.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="bi-0wkbso"/><path class="cyxc_lbvc"/><path class="ixr36dbus"/></g>`,
		"fallback": "icon-park:thinking-problem",
	});
}

export default Component;
