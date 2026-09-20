import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxyv9z9mh.css';
import '../../css/d/d1kwzebva.css';
import '../../css/t/tx91xabyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="yxyv9z9mh"><path class="d1kwzebva"/><path class="tx91xabyh"/></g>`,
		"fallback": "streamline-cyber-color:timer0-1",
	});
}

export default Component;
