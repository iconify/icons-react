import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxs-f7bng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxs-f7bng"/>`,
		"fallback": "ri:layout-vertical-fill",
	});
}

export default Component;
