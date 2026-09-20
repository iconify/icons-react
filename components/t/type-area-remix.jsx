import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0miepmqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j0miepmqg"/>`,
		"fallback": "streamline-sharp:type-area-remix",
	});
}

export default Component;
