import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asxgz14_n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asxgz14_n"/>`,
		"fallback": "game-icons:toothbrush",
	});
}

export default Component;
