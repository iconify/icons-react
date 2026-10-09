import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x813rhndo.css';
import '../../css/n/nvr1vcb4k.css';
import '../../css/b/bc-b47bac.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x813rhndo"/><path class="nvr1vcb4k"/><path class="bc-b47bac"/>`,
		"fallback": "energy-icons:paint-roller-48",
	});
}

export default Component;
