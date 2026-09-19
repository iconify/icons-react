import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhe6x9bga.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhe6x9bga"/>`,
		"fallback": "game-icons:target-prize",
	});
}

export default Component;
