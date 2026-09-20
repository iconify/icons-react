import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qov0oub3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qov0oub3m"/>`,
		"fallback": "tabler:sketching",
	});
}

export default Component;
