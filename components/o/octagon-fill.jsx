import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqvw7_bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqvw7_bbg"/>`,
		"fallback": "ri:octagon-fill",
	});
}

export default Component;
