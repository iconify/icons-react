import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwdl0x74e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwdl0x74e"/>`,
		"fallback": "mynaui:search",
	});
}

export default Component;
