import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di142kb5j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="di142kb5j"/>`,
		"fallback": "streamline:signage-4-remix",
	});
}

export default Component;
