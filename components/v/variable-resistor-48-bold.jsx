import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9514n9ut.css';
import '../../css/x/xdk69eb9j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9514n9ut"/><path class="xdk69eb9j"/>`,
		"fallback": "energy-icons:variable-resistor-48-bold",
	});
}

export default Component;
