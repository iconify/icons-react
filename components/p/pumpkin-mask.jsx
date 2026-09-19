import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e96ji41bl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e96ji41bl"/>`,
		"fallback": "game-icons:pumpkin-mask",
	});
}

export default Component;
