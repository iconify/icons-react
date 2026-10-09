import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy7xqk_um.css';
import '../../css/u/u_fdmll_m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy7xqk_um"/><path class="u_fdmll_m"/>`,
		"fallback": "energy-icons:sidebar-48-bold",
	});
}

export default Component;
