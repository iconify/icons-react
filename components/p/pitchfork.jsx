import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0bz1cnyy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0bz1cnyy"/>`,
		"fallback": "game-icons:pitchfork",
	});
}

export default Component;
