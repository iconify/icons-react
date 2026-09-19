import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jee5y5ssn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jee5y5ssn"/>`,
		"fallback": "game-icons:skirt",
	});
}

export default Component;
