import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/a/ap_ux3bfg.css';
import '../../css/q/q9q8vsb3b.css';
import '../../css/d/dzkh45bdk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ap_ux3bfg"/><path class="q9q8vsb3b"/><path class="dzkh45bdk"/></g>`,
		"fallback": "streamline-plump:vpn-connection",
	});
}

export default Component;
