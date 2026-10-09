import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy1oo49dt.css';
import '../../css/e/e15sxdbol.css';
import '../../css/r/r5r8zsb7i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy1oo49dt"/><path class="e15sxdbol"/><path class="r5r8zsb7i"/>`,
		"fallback": "energy-icons:office-48",
	});
}

export default Component;
