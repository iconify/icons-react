import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3jo43b4q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3jo43b4q"/>`,
		"fallback": "pinhead:pixel-plane",
	});
}

export default Component;
