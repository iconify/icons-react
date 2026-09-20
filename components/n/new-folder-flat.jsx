import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgb52ccwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgb52ccwa"/>`,
		"fallback": "streamline-sharp-color:new-folder-flat",
	});
}

export default Component;
