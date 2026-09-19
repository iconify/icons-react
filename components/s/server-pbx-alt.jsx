import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv7a7tz3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rv7a7tz3y"/>`,
		"fallback": "griddy-icons:server-pbx-alt",
	});
}

export default Component;
