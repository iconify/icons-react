import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q65t7t7ey.css';
import '../../css/i/iff33zhfm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q65t7t7ey"/><path class="iff33zhfm"/>`,
		"fallback": "energy-icons:rotate-ccw-20-bold",
	});
}

export default Component;
