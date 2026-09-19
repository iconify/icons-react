import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyr4js4ub.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyr4js4ub"/>`,
		"fallback": "game-icons:snitch-quidditch-ball",
	});
}

export default Component;
