import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wupo9cczk.css';
import '../../css/b/bubgyx1xt.css';
import '../../css/e/e-arpva-e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wupo9cczk"/><path class="bubgyx1xt"/><path class="e-arpva-e"/>`,
		"fallback": "energy-icons:lathe-48-bold",
	});
}

export default Component;
