import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3wig2b0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3wig2b0j"/>`,
		"fallback": "game-icons:tracked-robot",
	});
}

export default Component;
