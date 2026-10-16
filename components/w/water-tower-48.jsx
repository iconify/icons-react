import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezpwbhb1t.css';
import '../../css/p/p9mccbcgw.css';
import '../../css/j/jw2qf6buy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezpwbhb1t"/><path class="p9mccbcgw"/><path class="jw2qf6buy"/>`,
		"fallback": "energy-icons:water-tower-48",
	});
}

export default Component;
