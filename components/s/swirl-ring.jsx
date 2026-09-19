import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0_77dnbs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0_77dnbs"/>`,
		"fallback": "game-icons:swirl-ring",
	});
}

export default Component;
