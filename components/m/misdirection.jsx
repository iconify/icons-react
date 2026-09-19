import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndtze0b0q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndtze0b0q"/>`,
		"fallback": "game-icons:misdirection",
	});
}

export default Component;
