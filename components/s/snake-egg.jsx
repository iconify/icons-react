import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7j0dqbfy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7j0dqbfy"/>`,
		"fallback": "game-icons:snake-egg",
	});
}

export default Component;
