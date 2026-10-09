import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nivpnqg4j.css';
import '../../css/u/uio446_ji.css';
import '../../css/j/jfv0yh5wi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nivpnqg4j"/><path class="uio446_ji"/><path class="jfv0yh5wi"/>`,
		"fallback": "energy-icons:layout-20-bold",
	});
}

export default Component;
