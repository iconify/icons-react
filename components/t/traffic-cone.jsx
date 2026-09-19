import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbqm8nb8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbqm8nb8j"/>`,
		"fallback": "game-icons:traffic-cone",
	});
}

export default Component;
