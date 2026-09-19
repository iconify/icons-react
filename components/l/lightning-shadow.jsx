import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fowx1obfq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fowx1obfq"/>`,
		"fallback": "game-icons:lightning-shadow",
	});
}

export default Component;
