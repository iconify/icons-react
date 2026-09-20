import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a79z4tb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a79z4tb6m"/>`,
		"fallback": "mynaui:tally-four",
	});
}

export default Component;
