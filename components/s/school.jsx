import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buisi0gzo.css';
import '../../css/f/fvsrkp2dl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buisi0gzo"/><path class="fvsrkp2dl"/>`,
		"fallback": "cil:school",
	});
}

export default Component;
