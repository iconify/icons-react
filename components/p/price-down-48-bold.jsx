import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcp6u-oop.css';
import '../../css/e/ee8dj_rhy.css';
import '../../css/o/on5c6nbor.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcp6u-oop"/><path class="ee8dj_rhy"/><path class="on5c6nbor"/>`,
		"fallback": "energy-icons:price-down-48-bold",
	});
}

export default Component;
