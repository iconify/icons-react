import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o3dgnumue.css';
import '../../css/j/j1-zg0xja.css';
import '../../css/t/tow7vpjog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o3dgnumue"/><path class="j1-zg0xja"/><path class="tow7vpjog"/></g>`,
		"fallback": "hugeicons:presentation-bar-chart-01",
	});
}

export default Component;
