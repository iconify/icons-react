import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncjcrccsd.css';
import '../../css/w/wfyvh_b2x.css';
import '../../css/r/r5bqwybgq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncjcrccsd"/><path class="wfyvh_b2x"/><path class="r5bqwybgq"/>`,
		"fallback": "energy-icons:luggage-20-bold",
	});
}

export default Component;
