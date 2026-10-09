import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly6yqgv8r.css';
import '../../css/i/iebf4fbnh.css';
import '../../css/c/cp_vdbbue.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly6yqgv8r"/><path class="iebf4fbnh"/><path class="cp_vdbbue"/>`,
		"fallback": "energy-icons:thermometer-48-bold",
	});
}

export default Component;
