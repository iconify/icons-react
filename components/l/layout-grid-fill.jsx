import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf8-d7ban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf8-d7ban"/>`,
		"fallback": "mingcute:layout-grid-fill",
	});
}

export default Component;
