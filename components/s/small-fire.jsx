import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af8sc-fzp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af8sc-fzp"/>`,
		"fallback": "game-icons:small-fire",
	});
}

export default Component;
