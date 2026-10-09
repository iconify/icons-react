import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo1eldb9g.css';
import '../../css/e/e26qy--yc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo1eldb9g"/><path class="e26qy--yc"/>`,
		"fallback": "energy-icons:solar-inverter-20",
	});
}

export default Component;
