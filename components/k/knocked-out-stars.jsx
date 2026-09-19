import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z86n8gb9j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z86n8gb9j"/>`,
		"fallback": "game-icons:knocked-out-stars",
	});
}

export default Component;
