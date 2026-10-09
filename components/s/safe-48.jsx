import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwbw3abxb.css';
import '../../css/c/c7rkzybvo.css';
import '../../css/h/hberpve6c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwbw3abxb"/><path class="c7rkzybvo"/><path class="hberpve6c"/>`,
		"fallback": "energy-icons:safe-48",
	});
}

export default Component;
