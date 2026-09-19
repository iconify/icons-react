import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/va0qzx95a.css';
import '../../css/i/ie-ns4b3y.css';
import '../../css/z/z0u1g-tdn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="va0qzx95a"/><path class="ie-ns4b3y"/><path class="z0u1g-tdn"/></g>`,
		"fallback": "icon-park-solid:remind",
	});
}

export default Component;
