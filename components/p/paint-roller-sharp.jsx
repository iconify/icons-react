import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfbpohbjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfbpohbjg"/>`,
		"fallback": "keyline-icons:paint-roller-sharp",
	});
}

export default Component;
