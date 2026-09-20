import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pge5z1bty.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pge5z1bty"/>`,
		"fallback": "streamline:lock-rotation-remix",
	});
}

export default Component;
