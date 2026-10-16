import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev66c6l-q.css';
import '../../css/u/u9pwpyefj.css';
import '../../css/s/sw5c5ob3p.css';
import '../../css/d/ddnl6t2zw.css';
import '../../css/j/jvrzg1bub.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev66c6l-q"/><path class="u9pwpyefj"/><path class="sw5c5ob3p"/><path class="ddnl6t2zw"/><path class="jvrzg1bub"/>`,
		"fallback": "energy-icons:timeline-20",
	});
}

export default Component;
