import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bisr4s8em.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bisr4s8em"/>`,
		"fallback": "game-icons:poncho",
	});
}

export default Component;
