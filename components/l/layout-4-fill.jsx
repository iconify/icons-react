import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fua-xp95i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fua-xp95i"/>`,
		"fallback": "mingcute:layout-4-fill",
	});
}

export default Component;
