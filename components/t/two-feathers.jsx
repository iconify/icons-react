import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6dgambjg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6dgambjg"/>`,
		"fallback": "game-icons:two-feathers",
	});
}

export default Component;
