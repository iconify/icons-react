import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byqln5o1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byqln5o1u"/>`,
		"fallback": "game-icons:maracas",
	});
}

export default Component;
