import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg49w7bca.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg49w7bca"/>`,
		"fallback": "game-icons:level-two-advanced",
	});
}

export default Component;
