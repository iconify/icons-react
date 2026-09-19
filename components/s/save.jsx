import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhv3vqb4d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhv3vqb4d"/>`,
		"fallback": "game-icons:save",
	});
}

export default Component;
