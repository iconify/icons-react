import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8mzgiwjz.css';
import '../../css/w/w43qocbxc.css';
import '../../css/i/ikpbwe38b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8mzgiwjz"/><path class="w43qocbxc"/><path class="ikpbwe38b"/>`,
		"fallback": "energy-icons:nuclear-plant-alert-48",
	});
}

export default Component;
