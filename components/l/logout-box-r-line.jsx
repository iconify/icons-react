import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef904ebom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef904ebom"/>`,
		"fallback": "ri:logout-box-r-line",
	});
}

export default Component;
