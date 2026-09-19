import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzj-a2bag.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzj-a2bag"/>`,
		"fallback": "game-icons:spell-book",
	});
}

export default Component;
