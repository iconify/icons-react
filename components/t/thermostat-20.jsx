import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/q/q-d9kh0tc.css';
import '../../css/m/m0qa3fayh.css';
import '../../css/k/kiknbdcxq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="q-d9kh0tc"/><path class="m0qa3fayh"/><path class="kiknbdcxq"/>`,
		"fallback": "energy-icons:thermostat-20",
	});
}

export default Component;
