import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vscn6xb3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vscn6xb3l"/>`,
		"fallback": "ri:rocket-2-fill",
	});
}

export default Component;
