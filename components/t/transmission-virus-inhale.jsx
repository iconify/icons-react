import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cel9fwb6n.css';
import '../../css/w/wm33mhbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cel9fwb6n"/><path class="wm33mhbpa"/></g>`,
		"fallback": "covid:transmission-virus-inhale",
	});
}

export default Component;
