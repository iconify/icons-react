import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw-acp7gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw-acp7gx"/>`,
		"fallback": "ci:list-ol",
	});
}

export default Component;
