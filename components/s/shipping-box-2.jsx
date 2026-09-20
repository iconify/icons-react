import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tev417bot.css';
import '../../css/w/woe_l7brn.css';
import '../../css/q/q_ny5zrfh.css';
import '../../css/e/ezqgrwb5k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tev417bot"/><path class="woe_l7brn"/><path class="q_ny5zrfh"/><path class="ezqgrwb5k"/></g>`,
		"fallback": "streamline-flex-color:shipping-box-2",
	});
}

export default Component;
