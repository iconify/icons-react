import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4001abdb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4001abdb"/>`,
		"fallback": "game-icons:skull-ring",
	});
}

export default Component;
