import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhdbk79fo.css';
import '../../css/q/qcnda-9od.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhdbk79fo"/><path class="qcnda-9od"/>`,
		"fallback": "energy-icons:redo-48-bold",
	});
}

export default Component;
