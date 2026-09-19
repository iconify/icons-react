import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apf2wmk_g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apf2wmk_g"/>`,
		"fallback": "game-icons:power-lightning",
	});
}

export default Component;
