import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzek_iukp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzek_iukp"/>`,
		"fallback": "game-icons:shadow-grasp",
	});
}

export default Component;
