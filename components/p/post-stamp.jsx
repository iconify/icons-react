import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sne2qlnhe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sne2qlnhe"/>`,
		"fallback": "game-icons:post-stamp",
	});
}

export default Component;
