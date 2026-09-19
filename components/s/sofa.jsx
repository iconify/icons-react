import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th8wn5b6q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th8wn5b6q"/>`,
		"fallback": "game-icons:sofa",
	});
}

export default Component;
