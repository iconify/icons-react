import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzwzl0bzs.css';
import '../../css/t/te6at6blm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzwzl0bzs"/><path class="te6at6blm"/>`,
		"fallback": "energy-icons:lightbulb-sparkle-48",
	});
}

export default Component;
