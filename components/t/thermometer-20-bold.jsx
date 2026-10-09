import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbl6phbau.css';
import '../../css/o/ostwlt0as.css';
import '../../css/g/gh3kikb4e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbl6phbau"/><path class="ostwlt0as"/><path class="gh3kikb4e"/>`,
		"fallback": "energy-icons:thermometer-20-bold",
	});
}

export default Component;
