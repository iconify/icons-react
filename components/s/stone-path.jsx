import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q05doo8qi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q05doo8qi"/>`,
		"fallback": "game-icons:stone-path",
	});
}

export default Component;
