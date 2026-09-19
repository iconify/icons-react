import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tav7wc75e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tav7wc75e"/>`,
		"fallback": "game-icons:ketchup",
	});
}

export default Component;
