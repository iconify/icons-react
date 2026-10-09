import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n48n_cb8l.css';
import '../../css/x/x_1_4ts6b.css';
import '../../css/j/joo39vzqh.css';
import '../../css/u/u-1jw8b_q.css';
import '../../css/j/j-ekh8rky.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n48n_cb8l"/><path class="x_1_4ts6b"/><path class="joo39vzqh"/><path class="u-1jw8b_q"/><path class="j-ekh8rky"/>`,
		"fallback": "energy-icons:solar-panel-sun-48-bold",
	});
}

export default Component;
