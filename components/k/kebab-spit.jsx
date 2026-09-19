import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyt-vk_ql.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyt-vk_ql"/>`,
		"fallback": "game-icons:kebab-spit",
	});
}

export default Component;
