import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g61gfabvb.css';
import '../../css/m/m6htszb9o.css';
import '../../css/s/s00zyvb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g61gfabvb"/><path class="m6htszb9o"/><path class="s00zyvb1l"/></g>`,
		"fallback": "solar:videocamera-add-broken",
	});
}

export default Component;
