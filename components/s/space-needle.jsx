import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuamjlb3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuamjlb3e"/>`,
		"fallback": "game-icons:space-needle",
	});
}

export default Component;
