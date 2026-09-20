import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k2j4asbpi.css';
import '../../css/c/chja7twbz.css';
import '../../css/w/wglt83b5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k2j4asbpi"/><path class="chja7twbz"/><path class="wglt83b5r"/></g>`,
		"fallback": "solar:layers-broken",
	});
}

export default Component;
