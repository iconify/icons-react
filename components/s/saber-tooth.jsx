import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwjqv_u-d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwjqv_u-d"/>`,
		"fallback": "game-icons:saber-tooth",
	});
}

export default Component;
