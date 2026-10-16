import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj4_8bb8s.css';
import '../../css/a/a5tfz-sap.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj4_8bb8s"/><path class="a5tfz-sap"/>`,
		"fallback": "energy-icons:vr-headset-48",
	});
}

export default Component;
