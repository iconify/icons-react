import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxwq50j8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxwq50j8p"/>`,
		"fallback": "lucide:twitch",
	});
}

export default Component;
