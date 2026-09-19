import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfk20ob_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfk20ob_n"/>`,
		"fallback": "game-icons:seedling",
	});
}

export default Component;
