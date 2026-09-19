import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6memojec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6memojec"/>`,
		"fallback": "game-icons:tarot-03-the-empress",
	});
}

export default Component;
