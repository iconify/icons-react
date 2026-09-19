import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u848sva3u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u848sva3u"/>`,
		"fallback": "game-icons:laser-blast",
	});
}

export default Component;
