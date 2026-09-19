import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quypo_bot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quypo_bot"/>`,
		"fallback": "boxicons:monitor-wallpaper-filled",
	});
}

export default Component;
