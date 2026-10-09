import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrk88uxja.css';
import '../../css/k/kn5yufbkj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrk88uxja"/><path class="kn5yufbkj"/>`,
		"fallback": "energy-icons:panel-bottom-48-bold",
	});
}

export default Component;
