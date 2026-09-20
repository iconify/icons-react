import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4kwoob5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q4kwoob5o"/>`,
		"fallback": "streamline-sharp:user-head-focus-remix",
	});
}

export default Component;
