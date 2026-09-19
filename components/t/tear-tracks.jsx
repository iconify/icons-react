import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-d83hgrm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-d83hgrm"/>`,
		"fallback": "game-icons:tear-tracks",
	});
}

export default Component;
