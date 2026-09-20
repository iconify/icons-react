import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qakvv0b7s.css';
import '../../css/j/jse0vkp7i.css';
import '../../css/j/j3rs6kqlz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qakvv0b7s"/><path clip-rule="evenodd" class="jse0vkp7i"/><path class="j3rs6kqlz"/>`,
		"fallback": "token:qash",
	});
}

export default Component;
