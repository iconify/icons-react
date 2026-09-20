import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/w/wg0u-cjzd.css';
import '../../css/i/iimv1yb1w.css';
import '../../css/m/mqeg9ccnv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="wg0u-cjzd"/><path class="iimv1yb1w"/><path class="mqeg9ccnv"/></g>`,
		"fallback": "streamline-plump:shopping-basket-1",
	});
}

export default Component;
