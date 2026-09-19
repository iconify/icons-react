import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj9vgb4-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj9vgb4-f"/>`,
		"fallback": "game-icons:ram",
	});
}

export default Component;
