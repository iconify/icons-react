import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydwy7o8kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ydwy7o8kw"/>`,
		"fallback": "streamline-sharp:script-1-remix",
	});
}

export default Component;
