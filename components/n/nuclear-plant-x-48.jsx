import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8mzgiwjz.css';
import '../../css/w/w43qocbxc.css';
import '../../css/e/empdt5byq.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8mzgiwjz"/><path class="w43qocbxc"/><path class="empdt5byq"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:nuclear-plant-x-48",
	});
}

export default Component;
