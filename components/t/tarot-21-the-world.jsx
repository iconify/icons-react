import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab48hf36a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ab48hf36a"/>`,
		"fallback": "game-icons:tarot-21-the-world",
	});
}

export default Component;
