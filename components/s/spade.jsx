import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpe9ytz6y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpe9ytz6y"/>`,
		"fallback": "game-icons:spade",
	});
}

export default Component;
