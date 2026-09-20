import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4606q8jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4606q8jk"/>`,
		"fallback": "mingcute:layout-bottom-close-fill",
	});
}

export default Component;
