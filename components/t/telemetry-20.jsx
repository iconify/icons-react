import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll0lbeozm.css';
import '../../css/j/jaxt8ed6x.css';
import '../../css/c/czwa2emeh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll0lbeozm"/><path class="jaxt8ed6x"/><path class="czwa2emeh"/>`,
		"fallback": "energy-icons:telemetry-20",
	});
}

export default Component;
