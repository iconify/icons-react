import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qg47f8bmh.css';
import '../../css/m/mq9rm43yz.css';
import '../../css/t/tdifqf3xh.css';
import '../../css/h/hy5wr0lch.css';
import '../../css/y/ydno77b4f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qg47f8bmh"/><path class="mq9rm43yz"/><path class="tdifqf3xh"/><path class="hy5wr0lch"/><path class="ydno77b4f"/></g>`,
		"fallback": "streamline-kameleon-color:luggage-cart-pop",
	});
}

export default Component;
