import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgvia1b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgvia1b0a"/>`,
		"fallback": "mynaui:male",
	});
}

export default Component;
