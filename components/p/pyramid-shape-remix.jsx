import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt7qfob9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wt7qfob9s"/>`,
		"fallback": "streamline-sharp:pyramid-shape-remix",
	});
}

export default Component;
