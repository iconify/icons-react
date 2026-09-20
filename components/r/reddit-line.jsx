import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7hi9sbth.css';
import '../../css/u/ukauanbdu.css';
import '../../css/m/mrpd8lbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7hi9sbth"/><path class="ukauanbdu"/><path class="mrpd8lbxi"/>`,
		"fallback": "mingcute:reddit-line",
	});
}

export default Component;
