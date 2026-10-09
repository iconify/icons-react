import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/defz0cbcm.css';
import '../../css/k/khp0jolrv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="defz0cbcm"/><path class="khp0jolrv"/>`,
		"fallback": "energy-icons:mail-48-bold",
	});
}

export default Component;
