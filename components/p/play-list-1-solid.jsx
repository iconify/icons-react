import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwt0w3boi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fwt0w3boi"/>`,
		"fallback": "streamline-sharp:play-list-1-solid",
	});
}

export default Component;
