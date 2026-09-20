import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxew7j2zh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxew7j2zh"/>`,
		"fallback": "thesvg-color:rime",
	});
}

export default Component;
