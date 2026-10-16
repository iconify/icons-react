import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iht0nqksq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iht0nqksq"/>`,
		"fallback": "energy-icons:layout-list-48-bold",
	});
}

export default Component;
