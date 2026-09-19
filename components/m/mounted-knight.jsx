import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm_hg97ya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm_hg97ya"/>`,
		"fallback": "game-icons:mounted-knight",
	});
}

export default Component;
