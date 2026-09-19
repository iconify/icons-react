import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksoy79gkm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksoy79gkm"/>`,
		"fallback": "game-icons:perspective-dice-one",
	});
}

export default Component;
