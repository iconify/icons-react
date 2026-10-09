import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz30y8b3r.css';
import '../../css/u/ucqd8s_7s.css';
import '../../css/k/kc5_9-b5b.css';
import '../../css/l/l3vqhjbkq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz30y8b3r"/><path class="ucqd8s_7s"/><path class="kc5_9-b5b"/><path class="l3vqhjbkq"/>`,
		"fallback": "energy-icons:ventilation-20",
	});
}

export default Component;
