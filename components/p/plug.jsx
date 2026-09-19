import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi8elsf9q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi8elsf9q"/>`,
		"fallback": "game-icons:plug",
	});
}

export default Component;
