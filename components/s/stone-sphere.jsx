import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqr8a7b2o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqr8a7b2o"/>`,
		"fallback": "game-icons:stone-sphere",
	});
}

export default Component;
