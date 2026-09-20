import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx80lq-0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fx80lq-0k"/>`,
		"fallback": "streamline-sharp:rotate-right-remix",
	});
}

export default Component;
