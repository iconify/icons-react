import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/v/vdi-4w12d.css';
import '../../css/v/v-w5pabfp.css';
import '../../css/v/vv_vc2byo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="vdi-4w12d"/><path class="v-w5pabfp"/><path class="vv_vc2byo"/>`,
		"fallback": "energy-icons:thermostat-20-bold",
	});
}

export default Component;
