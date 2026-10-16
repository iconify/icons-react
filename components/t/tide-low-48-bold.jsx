import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-lwp7znm.css';
import '../../css/p/puykbrbcj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-lwp7znm"/><path class="puykbrbcj"/>`,
		"fallback": "energy-icons:tide-low-48-bold",
	});
}

export default Component;
