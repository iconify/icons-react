import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh5ep_9os.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh5ep_9os"/>`,
		"fallback": "pixelarticons:memory-stick",
	});
}

export default Component;
