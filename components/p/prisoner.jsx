import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3unbqbly.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3unbqbly"/>`,
		"fallback": "game-icons:prisoner",
	});
}

export default Component;
