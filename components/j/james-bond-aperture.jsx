import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tg32kgb4v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tg32kgb4v"/>`,
		"fallback": "game-icons:james-bond-aperture",
	});
}

export default Component;
