import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0-az_5wc.css';
import '../../css/w/wwjl5kbxm.css';
import '../../css/c/c4-hwm4yw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0-az_5wc"/><path class="wwjl5kbxm"/><path class="c4-hwm4yw"/>`,
		"fallback": "energy-icons:sensor-48-bold",
	});
}

export default Component;
