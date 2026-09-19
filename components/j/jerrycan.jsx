import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k95_pqbwy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k95_pqbwy"/>`,
		"fallback": "game-icons:jerrycan",
	});
}

export default Component;
