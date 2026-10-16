import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjx5knxyl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjx5knxyl"/>`,
		"fallback": "energy-icons:stairs-48",
	});
}

export default Component;
