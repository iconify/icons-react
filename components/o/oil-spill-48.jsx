import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kob1hjbgo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kob1hjbgo"/>`,
		"fallback": "energy-icons:oil-spill-48",
	});
}

export default Component;
