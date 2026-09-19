import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_d2o5wmx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_d2o5wmx"/>`,
		"fallback": "game-icons:ninja-head",
	});
}

export default Component;
