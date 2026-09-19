import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhwhxl1gh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhwhxl1gh"/>`,
		"fallback": "game-icons:sabers-choc",
	});
}

export default Component;
