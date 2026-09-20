import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4xfqxfzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y4xfqxfzi"/>`,
		"fallback": "streamline-sharp:mail-send-envelope-remix",
	});
}

export default Component;
