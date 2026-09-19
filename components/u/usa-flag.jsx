import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm7jd5bvx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm7jd5bvx"/>`,
		"fallback": "game-icons:usa-flag",
	});
}

export default Component;
