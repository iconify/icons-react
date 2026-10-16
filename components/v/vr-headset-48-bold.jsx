import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qht0pcczn.css';
import '../../css/m/mt2dtwjzm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qht0pcczn"/><path class="mt2dtwjzm"/>`,
		"fallback": "energy-icons:vr-headset-48-bold",
	});
}

export default Component;
