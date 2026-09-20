import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kob1615rl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kob1615rl"/>`,
		"fallback": "selfhst:openlist-light",
	});
}

export default Component;
