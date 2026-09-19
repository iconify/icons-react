import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olajqzefh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olajqzefh"/>`,
		"fallback": "game-icons:mushrooms",
	});
}

export default Component;
