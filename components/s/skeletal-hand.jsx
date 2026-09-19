import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kr8q3pbmd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kr8q3pbmd"/>`,
		"fallback": "game-icons:skeletal-hand",
	});
}

export default Component;
