import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5ciubb6p.css';
import '../../css/i/iowuvxnvk.css';
import '../../css/r/rw-4knbut.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5ciubb6p"/><path class="iowuvxnvk"/><path class="rw-4knbut"/>`,
		"fallback": "energy-icons:meeting-48-bold",
	});
}

export default Component;
