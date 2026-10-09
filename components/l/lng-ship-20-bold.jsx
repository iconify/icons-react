import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di6nw9_ac.css';
import '../../css/p/pzmzhxbns.css';
import '../../css/x/xcd9w1bsq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di6nw9_ac"/><path class="pzmzhxbns"/><path class="xcd9w1bsq"/>`,
		"fallback": "energy-icons:lng-ship-20-bold",
	});
}

export default Component;
