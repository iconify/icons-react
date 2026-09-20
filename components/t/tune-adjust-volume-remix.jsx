import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn2qr4boh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fn2qr4boh"/>`,
		"fallback": "streamline-sharp:tune-adjust-volume-remix",
	});
}

export default Component;
