import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf9ps8npn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bf9ps8npn"/>`,
		"fallback": "streamline-sharp:water-drop-1-solid",
	});
}

export default Component;
