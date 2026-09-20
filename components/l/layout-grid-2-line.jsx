import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esymu1zan.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esymu1zan"/>`,
		"fallback": "ri:layout-grid-2-line",
	});
}

export default Component;
