import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmp4lrb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmp4lrb4a"/>`,
		"fallback": "mingcute:layout-panel-top-fill",
	});
}

export default Component;
