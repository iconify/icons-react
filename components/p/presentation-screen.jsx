import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yrn1x2sgp.css';
import '../../css/y/yys4-bbwv.css';
import '../../css/v/vrwwxccjf.css';
import '../../css/f/f3j45ub3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yrn1x2sgp"/><path class="yys4-bbwv"/><path class="vrwwxccjf"/><path class="f3j45ub3r"/></g>`,
		"fallback": "streamline-freehand-color:presentation-screen",
	});
}

export default Component;
