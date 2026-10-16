import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d95ayjqct.css';
import '../../css/g/g_ub4abnv.css';
import '../../css/x/xa69_er8e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d95ayjqct"/><path class="g_ub4abnv"/><path class="xa69_er8e"/>`,
		"fallback": "energy-icons:pharmacy-48-bold",
	});
}

export default Component;
