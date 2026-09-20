import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in_982bav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="in_982bav"/>`,
		"fallback": "streamline-sharp:mail-loading-remix",
	});
}

export default Component;
