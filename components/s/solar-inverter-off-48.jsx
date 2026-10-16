import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zerildbqi.css';
import '../../css/k/kziqmybgy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zerildbqi"/><path class="kziqmybgy"/>`,
		"fallback": "energy-icons:solar-inverter-off-48",
	});
}

export default Component;
