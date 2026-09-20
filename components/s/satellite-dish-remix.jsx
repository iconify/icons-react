import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxj7zfbpg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xxj7zfbpg"/>`,
		"fallback": "streamline:satellite-dish-remix",
	});
}

export default Component;
