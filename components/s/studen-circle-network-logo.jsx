import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/j/j697l3uzc.css';
import '../../css/d/dku0a-b1a.css';
import '../../css/l/l_x32y_6i.css';
import '../../css/i/i7mhpwj8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="j697l3uzc"/><path class="dku0a-b1a"/><path class="l_x32y_6i"/><path class="i7mhpwj8e"/></g>`,
		"fallback": "streamline-logos:studen-circle-network-logo",
	});
}

export default Component;
