import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/w/wp-lbwbqz.css';
import '../../css/o/o59z9_b3i.css';
import '../../css/d/d3upv268i.css';
import '../../css/t/t3vjaccoe.css';

const viewBox = {"width":41,"height":41,"left":-0.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="wp-lbwbqz"/><path class="o59z9_b3i"/><path class="d3upv268i"/><path class="t3vjaccoe"/></g>`,
		"fallback": "streamline-stickies-color:school",
	});
}

export default Component;
