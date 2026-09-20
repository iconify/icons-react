import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tymvncb0s.css';
import '../../css/m/m3he6ybrq.css';
import '../../css/l/lhpuzx8ac.css';
import '../../css/i/i3uz7wbfw.css';
import '../../css/t/ts9rss-dx.css';
import '../../css/h/hpmkbmbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tymvncb0s"/><path class="m3he6ybrq"/><path class="lhpuzx8ac"/><path class="i3uz7wbfw"/><path class="ts9rss-dx"/><path class="hpmkbmbcd"/></g>`,
		"fallback": "streamline-cyber-color:shopping-cart-search",
	});
}

export default Component;
