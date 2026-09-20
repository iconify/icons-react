import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo71evf5d.css';
import '../../css/t/tbzab391z.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo71evf5d"/><path class="tbzab391z"/>`,
		"fallback": "openmoji:purple-square",
	});
}

export default Component;
