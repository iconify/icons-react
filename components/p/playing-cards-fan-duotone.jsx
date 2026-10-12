import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vu33wubzx.css';
import '../../css/e/ezpok6d0o.css';
import '../../css/d/drn3qgbsh.css';
import '../../css/q/q668hw6hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vu33wubzx"/><path class="ezpok6d0o"/><path class="drn3qgbsh"/><path class="q668hw6hc"/></g>`,
		"fallback": "lucide-extended:playing-cards-fan-duotone",
	});
}

export default Component;
