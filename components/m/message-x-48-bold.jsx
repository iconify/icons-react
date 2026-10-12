import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3norpbpl.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/s/sfb8rqn9v.css';
import '../../css/k/ksydp3lsw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3norpbpl"/><path class="hwjgqrbah"/><path class="sfb8rqn9v"/><path class="ksydp3lsw"/>`,
		"fallback": "energy-icons:message-x-48-bold",
	});
}

export default Component;
