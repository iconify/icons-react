import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1c9zmbsp.css';
import '../../css/s/scp3oyb1s.css';
import '../../css/t/tp54fz-fo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1c9zmbsp"/><path class="scp3oyb1s"/><path class="tp54fz-fo"/>`,
		"fallback": "energy-icons:thermometer-up-20-bold",
	});
}

export default Component;
