import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp_z9bcel.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zp_z9bcel"/>`,
		"fallback": "game-icons:udder",
	});
}

export default Component;
