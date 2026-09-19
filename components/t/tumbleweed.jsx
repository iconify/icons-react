import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqo9k340o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqo9k340o"/>`,
		"fallback": "game-icons:tumbleweed",
	});
}

export default Component;
