import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neebw0buz.css';
import '../../css/m/mg2rwedkj.css';
import '../../css/c/cek4p1-qj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="neebw0buz"/><path class="mg2rwedkj"/><path class="cek4p1-qj"/>`,
		"fallback": "energy-icons:sprout-48-bold",
	});
}

export default Component;
