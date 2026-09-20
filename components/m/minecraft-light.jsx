import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kob08kh-p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kob08kh-p"/>`,
		"fallback": "selfhst:minecraft-light",
	});
}

export default Component;
