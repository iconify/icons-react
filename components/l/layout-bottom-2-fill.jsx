import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/il6uzfbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="il6uzfbbc"/>`,
		"fallback": "ri:layout-bottom-2-fill",
	});
}

export default Component;
