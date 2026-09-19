import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmdp---jz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmdp---jz"/>`,
		"fallback": "game-icons:shattered-sword",
	});
}

export default Component;
