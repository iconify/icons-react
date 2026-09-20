import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miehgxb5z.css';
import '../../css/e/ekhn6xp0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miehgxb5z"/><path class="ekhn6xp0m"/>`,
		"fallback": "mingcute:photo-album-2-line",
	});
}

export default Component;
