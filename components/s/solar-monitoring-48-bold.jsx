import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om_2m0e4d.css';
import '../../css/z/zhkqvsbwg.css';
import '../../css/a/axb1k_ble.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om_2m0e4d"/><path class="zhkqvsbwg"/><path class="axb1k_ble"/>`,
		"fallback": "energy-icons:solar-monitoring-48-bold",
	});
}

export default Component;
