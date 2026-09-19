import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0v99dbvr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0v99dbvr"/>`,
		"fallback": "game-icons:top-hat",
	});
}

export default Component;
