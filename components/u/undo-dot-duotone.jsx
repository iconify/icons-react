import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8kbf-b-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary v8kbf-b-t"/>`,
		"fallback": "iconaut:undo-dot-duotone",
	});
}

export default Component;
