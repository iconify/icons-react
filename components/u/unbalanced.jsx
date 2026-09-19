import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pp_9pbj6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pp_9pbj6b"/>`,
		"fallback": "game-icons:unbalanced",
	});
}

export default Component;
