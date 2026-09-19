import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r87fz2wei.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r87fz2wei"/>`,
		"fallback": "game-icons:o-brick",
	});
}

export default Component;
