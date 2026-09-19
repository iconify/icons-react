import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okysa4a1v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okysa4a1v"/>`,
		"fallback": "game-icons:star-struck",
	});
}

export default Component;
