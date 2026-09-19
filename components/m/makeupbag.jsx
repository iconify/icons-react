import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqi9nibps.css';
import '../../css/q/qu7t8acvf.css';
import '../../css/p/p0jryn3-f.css';
import '../../css/k/kdrnv1wyl.css';
import '../../css/t/ti-0s04_a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bqi9nibps"/><path class="qu7t8acvf"/><path class="p0jryn3-f"/><path class="kdrnv1wyl"/><path class="ti-0s04_a"/>`,
		"fallback": "fxemoji:makeupbag",
	});
}

export default Component;
