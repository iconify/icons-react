import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwp1_ab4r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwp1_ab4r"/>`,
		"fallback": "game-icons:tusks-flag",
	});
}

export default Component;
