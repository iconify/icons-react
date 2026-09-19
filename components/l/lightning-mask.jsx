import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km241ybxq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km241ybxq"/>`,
		"fallback": "game-icons:lightning-mask",
	});
}

export default Component;
