import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io5uy9biy.css';
import '../../css/m/mt5_qbbwq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io5uy9biy"/><path class="mt5_qbbwq"/>`,
		"fallback": "energy-icons:mail-unread-48-bold",
	});
}

export default Component;
