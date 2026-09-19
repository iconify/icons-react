import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd4m75byq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd4m75byq"/>`,
		"fallback": "game-icons:level-three",
	});
}

export default Component;
