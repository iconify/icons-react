import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhr38dbuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhr38dbuq"/>`,
		"fallback": "mingcute:volume-mute-fill",
	});
}

export default Component;
