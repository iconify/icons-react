import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k71mgzbis.css';
import '../../css/a/a3siao3xy.css';
import '../../css/i/ikpbwe38b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k71mgzbis"/><path class="a3siao3xy"/><path class="ikpbwe38b"/>`,
		"fallback": "energy-icons:server-alert-48",
	});
}

export default Component;
