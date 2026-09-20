import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g7gof_jgj.css';
import '../../css/w/w7l898bvo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="g7gof_jgj"/><path class="w7l898bvo"/></g>`,
		"fallback": "streamline-flex:online-medical-service-monitor",
	});
}

export default Component;
