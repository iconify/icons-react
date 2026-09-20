import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lebqn5bme.css';
import '../../css/a/azsj7yb9j.css';
import '../../css/q/qxdu-bceo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lebqn5bme"/><path class="azsj7yb9j"/><path class="qxdu-bceo"/></g>`,
		"fallback": "solar:medal-star-circle-broken",
	});
}

export default Component;
