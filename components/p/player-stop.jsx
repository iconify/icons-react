import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1rfrbc2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="y1rfrbc2s"/>`,
		"fallback": "iconamoon:player-stop",
	});
}

export default Component;
