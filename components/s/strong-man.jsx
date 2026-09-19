import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcf47rvwm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcf47rvwm"/>`,
		"fallback": "game-icons:strong-man",
	});
}

export default Component;
