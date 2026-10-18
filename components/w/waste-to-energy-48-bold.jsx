import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvf-xkd7w.css';
import '../../css/q/qcyw9hsoi.css';
import '../../css/y/yv_v-ij1v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvf-xkd7w"/><path class="qcyw9hsoi"/><path class="yv_v-ij1v"/>`,
		"fallback": "energy-icons:waste-to-energy-48-bold",
	});
}

export default Component;
