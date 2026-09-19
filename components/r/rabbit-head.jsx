import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqb96mbgk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqb96mbgk"/>`,
		"fallback": "game-icons:rabbit-head",
	});
}

export default Component;
