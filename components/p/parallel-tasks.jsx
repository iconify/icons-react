import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhqdfsbas.css';
import '../../css/l/l8vyo8zlh.css';
import '../../css/e/e_kkwobnq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhqdfsbas"/><path class="l8vyo8zlh"/><path class="e_kkwobnq"/>`,
		"fallback": "flat-color-icons:parallel-tasks",
	});
}

export default Component;
