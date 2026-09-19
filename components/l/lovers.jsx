import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js7h18_wt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js7h18_wt"/>`,
		"fallback": "game-icons:lovers",
	});
}

export default Component;
