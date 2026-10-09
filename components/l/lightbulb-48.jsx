import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzwzl0bzs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzwzl0bzs"/>`,
		"fallback": "energy-icons:lightbulb-48",
	});
}

export default Component;
