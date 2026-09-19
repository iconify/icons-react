import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dznn1zbmo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dznn1zbmo"/>`,
		"fallback": "game-icons:tank",
	});
}

export default Component;
