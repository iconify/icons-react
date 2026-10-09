import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwd4bqqyn.css';
import '../../css/t/th72r3bkf.css';
import '../../css/g/g5w0d9o1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwd4bqqyn"/><path class="th72r3bkf"/><path class="g5w0d9o1n"/>`,
		"fallback": "energy-icons:sync-48-bold",
	});
}

export default Component;
