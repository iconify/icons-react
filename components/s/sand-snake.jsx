import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odyt2ebza.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odyt2ebza"/>`,
		"fallback": "game-icons:sand-snake",
	});
}

export default Component;
