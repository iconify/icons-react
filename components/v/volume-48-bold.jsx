import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kavo--bbr.css';
import '../../css/l/ll5uu22sv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kavo--bbr"/><path class="ll5uu22sv"/>`,
		"fallback": "energy-icons:volume-48-bold",
	});
}

export default Component;
