import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg_orq4_t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg_orq4_t"/>`,
		"fallback": "game-icons:stahlhelm",
	});
}

export default Component;
