import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwk70sbgc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwk70sbgc"/>`,
		"fallback": "game-icons:shark-bite",
	});
}

export default Component;
