import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx5zfftik.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx5zfftik"/>`,
		"fallback": "game-icons:perspective-dice-six-faces-three",
	});
}

export default Component;
