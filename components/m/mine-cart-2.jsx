import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/df2xbmbck.css';
import '../../css/k/kmwtuw85u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="df2xbmbck"/><path class="kmwtuw85u"/></g>`,
		"fallback": "streamline-sharp:mine-cart-2",
	});
}

export default Component;
