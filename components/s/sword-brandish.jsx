import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naovz_vyi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="naovz_vyi"/>`,
		"fallback": "game-icons:sword-brandish",
	});
}

export default Component;
