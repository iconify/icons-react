import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw0hcjblj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw0hcjblj"/>`,
		"fallback": "game-icons:star-sattelites",
	});
}

export default Component;
