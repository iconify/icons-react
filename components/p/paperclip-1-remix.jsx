import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6u7xabka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g6u7xabka"/>`,
		"fallback": "streamline-sharp:paperclip-1-remix",
	});
}

export default Component;
