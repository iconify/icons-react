import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tas0m7brp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tas0m7brp"/>`,
		"fallback": "game-icons:multiple-targets",
	});
}

export default Component;
