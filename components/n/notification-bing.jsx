import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_cyjh5hd.css';
import '../../css/n/n75-9ccan.css';
import '../../css/g/g0good_0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n_cyjh5hd"><path class="n75-9ccan"/><path class="g0good_0d"/></g>`,
		"fallback": "reicon:notification-bing",
	});
}

export default Component;
