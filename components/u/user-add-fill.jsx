import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkhs_xi9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkhs_xi9k"/>`,
		"fallback": "mingcute:user-add-fill",
	});
}

export default Component;
